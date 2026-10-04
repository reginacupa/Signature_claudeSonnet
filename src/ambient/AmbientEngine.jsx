import { useEffect, useLayoutEffect, useRef } from 'react';
import { ambient } from '../config/tokens.js';
import { buildPolygon, clamp01, lerp, lightBounds, smooth } from './edge.js';
import { getTargets, setNotifier } from './registry.js';

/**
 * Camada fixa de luz + controlador de scroll.
 *
 * Background e foreground são UM sistema: o mesmo cálculo que desenha a
 * fronteira decide, por elemento (letra, linha, bloco), se o texto está
 * sobre dark ou light e troca os tokens semânticos (data-tone). Não há
 * transição de cor — nunca existe estado intermediário de baixo contraste.
 *
 * Marcadores no DOM:
 *   [data-ambient-sweep]  seção pinned onde o light é revelado
 *   [data-ambient-return] footer, onde o dark retorna
 */
export default function AmbientEngine() {
  const layerRef = useRef(null);

  useLayoutEffect(() => {
    const layer = layerRef.current;
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = mqReduce.matches;
    let raf = 0;
    let lastKey = '';

    const update = () => {
      raf = 0;
      const H = layer.clientHeight || window.innerHeight;
      const W = window.innerWidth;
      const vh = window.innerHeight;
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - vh;

      /* ── fase 1: revelação do light ── */
      let b1 = ambient.edgeEnd;
      const sweep = document.querySelector('[data-ambient-sweep]');
      if (sweep) {
        const r = sweep.getBoundingClientRect();
        const top = r.top + y;
        const pin = Math.max(1, r.height - vh);
        if (y < top) {
          b1 = lerp(ambient.edgeStart, ambient.edgeAfterHero, top > 1 ? clamp01(y / top) : 1);
        } else {
          const t = clamp01(clamp01((y - top) / pin) / ambient.sweepEnd);
          b1 = lerp(ambient.edgeAfterHero, ambient.edgeEnd, smooth(t));
        }
      }

      /* ── fase 2: retorno ao dark ancorado no footer ── */
      let b2 = 3;
      const ret = document.querySelector('[data-ambient-return]');
      if (ret) {
        const r = ret.getBoundingClientRect();
        const top = r.top + y;
        const start = top - vh * ambient.returnLead;
        const t = clamp01((y - start) / Math.max(1, maxScroll - start));
        b2 = r.top / H - lerp(0, ambient.returnOverrun, smooth(t));
      }

      const key = `${b1.toFixed(4)}|${b2.toFixed(4)}|${reduced}`;
      if (key !== lastKey) {
        lastKey = key;
        layer.style.clipPath = buildPolygon(b1, b2, reduced);
      }

      /* ── foreground: tom por elemento (lê tudo, depois escreve) ── */
      const writes = [];
      getTargets().forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -80 || r.top > vh + 80) return;
        const cy = (Math.max(r.top, 0) + Math.min(r.bottom, vh)) / 2;
        const cx = Math.min(W, Math.max(0, (r.left + r.right) / 2));
        const xf = cx / W;
        const [e1, e2] = lightBounds(xf, b1, b2, reduced);
        const y1 = e1 * H;
        const y2 = e2 * H;
        const tone = cy >= y1 && cy <= y2 ? 'light' : 'dark';

        /* Letras atravessadas pela fronteira: o tom muda DENTRO da letra
           (gradiente duro + background-clip:text), seguindo a inclinação local. */
        let split = null;
        if (el.hasAttribute('data-split') && r.height > 0) {
          const hit1 = y1 > r.top && y1 < r.bottom;
          const hit2 = !hit1 && y2 > r.top && y2 < r.bottom;
          if (hit1 || hit2) {
            const dx = Math.max(2, r.width) / W;
            const [a1, a2] = lightBounds(Math.max(0, xf - dx / 2), b1, b2, reduced);
            const [c1, c2] = lightBounds(Math.min(1, xf + dx / 2), b1, b2, reduced);
            const ey = hit1 ? y1 : y2;
            const slope = ((hit1 ? c1 - a1 : c2 - a2) * H) / Math.max(1, r.width);
            const nrm = Math.sqrt(1 + slope * slope);
            const theta = Math.atan2(-slope, -1); // direção "para baixo" normal à fronteira
            const L = Math.abs(r.width * Math.sin(theta)) + Math.abs(r.height * Math.cos(theta));
            const d = (ey - (r.top + r.bottom) / 2) / nrm;
            const pos = 50 + (d / L) * 100;
            const ang = (theta * 180) / Math.PI;
            // e1: acima = dark (texto claro), abaixo = light (texto escuro). e2: o inverso.
            const top = hit1 ? 'var(--text-on-dark)' : 'var(--text-on-light)';
            const bot = hit1 ? 'var(--text-on-light)' : 'var(--text-on-dark)';
            split = `linear-gradient(${ang.toFixed(2)}deg, ${top} ${pos.toFixed(2)}%, ${bot} ${pos.toFixed(2)}%)`;
          }
        }
        const state = split ? 'split' : tone;
        if (el.dataset.tone !== state || (split && el.style.backgroundImage !== split)) {
          writes.push([el, state, split]);
        }
      });
      writes.forEach(([el, state, split]) => {
        el.dataset.tone = state;
        el.style.backgroundImage = split || '';
      });

      const pastHero = y > vh * 0.55 ? 'true' : 'false';
      if (document.documentElement.dataset.pastHero !== pastHero) {
        document.documentElement.dataset.pastHero = pastHero;
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onReduce = (e) => {
      reduced = e.matches;
      lastKey = '';
      schedule();
    };

    setNotifier(update);
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    mqReduce.addEventListener('change', onReduce);
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);
    document.fonts?.ready.then(schedule);

    return () => {
      setNotifier(null);
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
      mqReduce.removeEventListener('change', onReduce);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.pastHero = 'false';
  }, []);

  return <div ref={layerRef} className="ambient" aria-hidden="true" />;
}
