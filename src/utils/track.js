/** Eventos básicos (WhatsApp/CTA). Usa dataLayer se existir; nunca quebra. */
export function track(event, params = {}) {
  try {
    window.dataLayer?.push({ event, ...params });
  } catch {
    /* noop */
  }
}
