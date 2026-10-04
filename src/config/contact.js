/**
 * CONTATO / WHATSAPP — único lugar a editar.
 * Não inventar número: preencher `whatsappNumber` quando o dado definitivo existir.
 * Formato: apenas dígitos com DDI+DDD, ex.: '55XXXXXXXXXXX'.
 */
export const contact = {
  whatsappNumber: '', // PENDENTE — dado definitivo ainda não fornecido
  whatsappMessage: 'Olá! Quero contar sobre o meu projeto.', // PROVISÓRIO
  email: 'reginacupa@gmail.com',
  domain: 'signature.tec.br',
};

export function whatsappUrl() {
  const text = encodeURIComponent(contact.whatsappMessage);
  const n = contact.whatsappNumber.replace(/\D/g, '');
  return n ? `https://wa.me/${n}?text=${text}` : `https://wa.me/?text=${text}`;
}

export const whatsappConfigured = () => contact.whatsappNumber.replace(/\D/g, '').length > 0;
