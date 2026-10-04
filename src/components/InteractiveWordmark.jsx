import { useEffect, useRef, useState } from 'react';
import Tone from '../ambient/Tone.jsx';
import { motion } from '../config/tokens.js';

const STEM = [...'SIGNATU'];
const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/**
 * SIGNATURE → SIGNATURe  (Master §3, LOCKED)
 *
 * - SIGNATU estável; apenas o "Re" muda (Anta caps → Mr Dafoe, vinho).
 * - Sem layout shift: a célula tem a largura de "RE"; o "Re" manuscrito é
 *   um overlay absoluto, revelado por clip-path (escrito da esquerda p/ direita).
 * - Desktop: hover/foco. Touch: toque alterna + dica automática única.
 * - `hint`: 'none' | 'once'  — descoberta sem hover
 * - `hold`: mantém revelado ao entrar em vista (fechamento no footer)
 * - `revealed`: controle externo (ex.: header, via hover/foco do link)
 * Cada letra é um Tone: a fronteira dark/light pode atravessar a marca.
 */
export default function InteractiveWordmark({
  as = 'button',
  size = 'hero',
  hint = 'none',
  hold = false,
  revealed,
  intro = false,
  className = '',
}) {
  const rootRef = useRef(null);
  const touched = useRef(false);
  const everHovered = useRef(false);
  const [hover, setHover] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [hinted, setHinted] = useState(false);
  const [held, setHeld] = useState(false);

  const open = revealed ?? (hover || pinned || hinted || held);

  /* dica de descoberta (sem hover) + retenção no footer */
  useEffect(() => {
    const el = rootRef.current;
    if (!el || (hint === 'none' && !hold)) return undefined;
    const timers = [];
    let done = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done) return;
        done = true;
        io.disconnect();
        if (hold) {
          timers.push(setTimeout(() => setHeld(true), motion.footerHold.delay));
          return;
        }
        const delay = canHover() ? motion.wordmarkHint.hoverDelay : motion.wordmarkHint.touchDelay;
        timers.push(
          setTimeout(() => {
            if (touched.current || everHovered.current) return;
            setHinted(true);
            timers.push(setTimeout(() => setHinted(false), motion.wordmarkHint.hold));
          }, delay),
        );
      },
      { threshold: hold ? motion.footerHold.viewThreshold : motion.wordmarkHint.viewThreshold },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [hint, hold]);

  const interactive = as === 'button';
  const handlers = interactive
    ? {
        onPointerEnter: (e) => {
          if (e.pointerType !== 'mouse') return;
          everHovered.current = true;
          setHover(true);
        },
        onPointerLeave: (e) => {
          if (e.pointerType === 'mouse') setHover(false);
        },
        onFocus: (e) => {
          if (e.target.matches(':focus-visible')) setHover(true);
        },
        onBlur: () => setHover(false),
        onClick: () => {
          touched.current = true;
          setHinted(false);
          setPinned((p) => !p);
        },
      }
    : {};

  const Root = interactive ? 'button' : 'span';

  return (
    <Root
      ref={rootRef}
      className={`wm wm--${size}${intro ? ' wm--intro' : ''}${className ? ' ' + className : ''}`}
      data-open={open ? 'true' : 'false'}
      {...(interactive ? { type: 'button', 'aria-pressed': open } : {})}
      {...handlers}
    >
      <span className="sr-only">SignatuRe</span>
      <span aria-hidden="true" className="wm__visual">
        {STEM.map((ch, i) => (
          <Tone key={i} as="span" split className="wm__l" style={{ '--i': i }}>
            {ch}
          </Tone>
        ))}
        <Tone as="span" className="wm__re" style={{ '--i': STEM.length }}>
          <span className="wm__caps">RE</span>
          <span className="wm__script">Re</span>
        </Tone>
      </span>
    </Root>
  );
}
