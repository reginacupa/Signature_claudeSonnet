/** Conteúdo comercial — Master §19–§39 (COMMERCIAL RULE). Não alterar valores. */
export const offers = [
  { name: 'Landing Page', pre: 'A partir de', price: 'R$ 3.500', meta: '10–15 dias úteis' },
  { name: 'Site Institucional', pre: 'A partir de', price: 'R$ 5.500', meta: '20–30 dias úteis' },
  { name: 'Modernização / Redesign', price: 'Sob avaliação e orçamento', meta: 'Prazo conforme proposta' },
  { name: 'Projeto personalizado', price: 'Sob consulta', meta: 'Prazo conforme proposta' },
];

export const included = [
  '2 rodadas consolidadas de revisão, salvo proposta diferente.',
  'SEO técnico/on-page básico e mensuração inicial, quando aplicável. Sem promessa de ranking.',
  '30 dias de acompanhamento após a publicação.',
  'Backup por no mínimo 12 meses após a publicação.',
  'Projeto/código final entregue após a quitação, conforme proposta.',
];

export const flow = [
  'Contato',
  'Qualificação',
  'Briefing SignatuRe',
  'Alinhamento quando necessário',
  'Proposta',
  'Contrato',
  'Entrada',
  'Reserva da agenda',
  'Materiais',
  'Início',
];

export const notes = [
  'O prazo começa após o briefing e os materiais essenciais. A espera por retorno não consome prazo de produção.',
  'Você fornece os materiais-base: informações, textos, logo, fotos. Domínio e hospedagem são contratados e pagos por você.',
  'Mudança de direção, rodadas extras ou novo escopo podem alterar prazo e investimento. Nenhum adicional sem aprovação prévia.',
  'Urgência é avaliada caso a caso.',
];

export const payment = {
  parts: [
    { n: '50%', t: 'na contratação e reserva da agenda' },
    { n: '50%', t: 'na conclusão e aprovação final, antes da publicação' },
  ],
  proposal: 'Proposta válida por 10 dias corridos.',
};

export const care = {
  name: 'SignatuRe Care',
  price: 'R$ 390/mês',
  values: ['Prioridade', 'Previsibilidade', 'Praticidade', 'Continuidade', 'Relacionamento'],
  details: [
    'Até 3 solicitações consolidadas de pequenas atualizações por mês. Não acumulam.',
    'Prazo normal de até 3 dias úteis, conforme demanda.',
    'Backup enquanto ativo.',
    'Disponível após os 30 dias de acompanhamento, somente para projetos SignatuRe.',
    'Pagamento antecipado. Sem fidelidade no lançamento.',
  ],
  adhoc: 'Manutenção avulsa a partir de R$ 180 por atendimento, sujeito à avaliação.',
};

export const legal = 'Condições finais formalizadas em proposta e contrato.';
