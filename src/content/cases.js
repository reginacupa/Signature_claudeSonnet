/**
 * CASES. Somente trabalho real da SignatuRe.
 * Case 01 = a própria SignatuRe (LOCKED). Imagens ainda NÃO existem.
 *
 * Quando as capturas reais estiverem em /public/assets/projects/signature/,
 * preencher `media` — o CaseStudy troca do estado inicial para as imagens
 * sem alterar layout:
 *
 *   media: {
 *     desktop: { src: '/assets/projects/signature/desktop.webp', width: 1920, height: 1200,
 *                alt: '…', srcSet: '… 960w, … 1920w' },
 *     mobile:  { src: '/assets/projects/signature/mobile.webp', width: 780, height: 1688, alt: '…' },
 *   }
 */
export const cases = [
  {
    id: '01',
    title: 'SignatuRe',
    type: 'Projeto proprietário',
    kind: 'Own-brand digital experience',
    // Disciplinas listadas no Master §15.
    disciplines: [
      'posicionamento',
      'sistema de marca aplicado',
      'UX/UI',
      'Design System',
      'arquitetura de conversão',
      'desenvolvimento',
      'responsivo',
      'acessibilidade',
      'mensuração',
      'publicação',
    ],
    media: { desktop: null, mobile: null },
  },
];
