/** Registro de elementos cujo tom (dark/light) é decidido pela posição na tela. */
const targets = new Set();
let notify = null;
let queued = false;

export const getTargets = () => targets;
export const setNotifier = (fn) => {
  notify = fn;
};

function requestSync() {
  if (queued || !notify) return;
  queued = true;
  // microtask: roda antes do paint, evita flash de tom errado
  queueMicrotask(() => {
    queued = false;
    notify?.();
  });
}

export function registerTone(el) {
  if (!el) return () => {};
  targets.add(el);
  requestSync();
  return () => targets.delete(el);
}
