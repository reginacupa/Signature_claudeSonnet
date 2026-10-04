import { Fragment, useEffect, useLayoutEffect, useRef } from 'react';
import { registerTone } from './registry.js';
import { motion } from '../config/tokens.js';

/**
 * Elemento "ciente do ambiente": o tom (data-tone) é decidido pelo motor.
 * Com `reveal`, entra uma vez (opacity/transform) ao aparecer.
 */
export default function Tone({ as: Tag = 'div', reveal = false, split = false, className = '', children, ...rest }) {
  const ref = useRef(null);

  useLayoutEffect(() => registerTone(ref.current), []);

  useEffect(() => {
    if (!reveal) return undefined;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.in = '1';
          io.disconnect();
        }
      },
      { threshold: motion.reveal.threshold, rootMargin: motion.reveal.rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reveal]);

  return (
    <Tag
      ref={ref}
      data-tone="dark"
      data-split={split ? '1' : undefined}
      className={`tone${reveal ? ' reveal' : ''}${className ? ' ' + className : ''}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Divide texto em letras; cada letra recebe seu próprio tom. Texto acessível fica fora (sr-only). */
export function SplitTone({ text, className = '' }) {
  const words = text.split(' ');
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={className}>
        {words.map((w, wi) => (
          <Fragment key={wi}>
            <span className="st-word">
              {[...w].map((ch, ci) => (
                <Tone key={ci} as="span" split className="st-ch">
                  {ch}
                </Tone>
              ))}
            </span>
            {wi < words.length - 1 ? ' ' : null}
          </Fragment>
        ))}
      </span>
    </>
  );
}
