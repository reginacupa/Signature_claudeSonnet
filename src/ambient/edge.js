import { ambient } from '../config/tokens.js';

const TAU = Math.PI * 2;

export const clamp01 = (v) => Math.min(1, Math.max(0, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);

/**
 * Posição vertical (fração do viewport) da fronteira orgânica em x ∈ [0,1].
 * Assimétrica: inclinação + duas ondas incomensuráveis. `reduced` => reta.
 */
export function edgeAt(x, base, phase, reduced) {
  if (reduced) return base;
  const s = ambient.shape;
  return (
    base +
    s.tilt * phase.tiltSign * (x - 0.5) +
    s.a1 * Math.sin(TAU * s.f1 * x + phase.p1) +
    s.a2 * Math.sin(TAU * s.f2 * x + phase.p2)
  );
}

/** Região clara = entre e1 (por cima) e e2 (por baixo). */
export function lightBounds(x, b1, b2, reduced) {
  const e1 = edgeAt(x, b1, ambient.phaseIn, reduced);
  const e2 = Math.max(edgeAt(x, b2, ambient.phaseOut, reduced), e1);
  return [e1, e2];
}

export function buildPolygon(b1, b2, reduced) {
  const n = ambient.points;
  const top = [];
  const bottom = [];
  for (let i = 0; i <= n; i++) {
    const x = i / n;
    const [e1, e2] = lightBounds(x, b1, b2, reduced);
    top.push(`${(x * 100).toFixed(2)}% ${(e1 * 100).toFixed(2)}%`);
    bottom.push(`${(x * 100).toFixed(2)}% ${(e2 * 100).toFixed(2)}%`);
  }
  return `polygon(${top.join(',')},${bottom.reverse().join(',')})`;
}
