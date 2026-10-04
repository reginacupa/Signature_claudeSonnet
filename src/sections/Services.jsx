import { useEffect, useRef } from 'react';
import Tone from '../ambient/Tone.jsx';
import { copy } from '../content/copy.js';

/**
 * 04 O QUE FAZEMOS — escada tipográfica (não cards). A linha mais próxima do
 * centro do viewport fica "ativa" (linha vinho + contraste total).
 * Todo o texto é visível sempre; ativo é só ênfase, nada depende de hover.
 */
export default function Services() {
  const { title, intro, items } = copy.services;
  const listRef = useRef(null);

  useEffect(() => {
    const rows = [...listRef.current.querySelectorAll('.svc')];
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.52;
      let best = null;
      let bestD = Infinity;
      rows.forEach((r) => {
        const b = r.getBoundingClientRect();
        const d = Math.abs((b.top + b.bottom) / 2 - mid);
        if (d < bestD) {
          bestD = d;
          best = r;
        }
      });
      rows.forEach((r) => {
        r.dataset.active = r === best && bestD < window.innerHeight * 0.45 ? 'true' : 'false';
      });
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
    };
  }, []);

  return (
    <section id="o-que-fazemos" className="services" aria-labelledby="services-title">
      <div className="services__intro">
        <Tone as="h2" id="services-title" reveal className="services__title">
          {title}
        </Tone>
        <Tone as="p" reveal className="services__lede">
          {intro}
        </Tone>
      </div>

      <ol className="services__list" ref={listRef}>
        {items.map((it, i) => (
          <li key={it.name} className="svc" data-active="false" style={{ '--n': i }}>
            <Tone className="svc__index" aria-hidden="true">
              0{i + 1}
            </Tone>
            <Tone as="h3" className="svc__name">
              {it.name}
            </Tone>
            <Tone className="svc__text">
              <p className="svc__lead">{it.lead}</p>
              <p className="svc__body">{it.body}</p>
            </Tone>
          </li>
        ))}
      </ol>
    </section>
  );
}
