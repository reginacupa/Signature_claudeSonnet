/**
 * SIGNATURE — DESIGN TOKENS (fonte única)
 * Tudo que o Master marca como CALIBRATE IN BROWSER está aqui.
 * Os valores são injetados como CSS custom properties em :root (applyTokens)
 * antes do primeiro render. Breakpoints: src/styles/breakpoints.css.
 */

/* ─── COLOR — CALIBRATE IN BROWSER ─────────────────────────────── */
export const color = {
  charcoal: '#14110F', // ambiente escuro
  ivory: '#EDE8E3', // candidato do Master; aqui usado como SUPERFÍCIE clara (papel a decidir)
  gray: '#8C857C', // cinza mineral de suporte (não usado como texto)

  // foreground semântico — trocam junto com o fundo (ver ambient/)
  textOnDark: '#F1EDE8',
  textMutedOnDark: '#A59D93',
  textOnLight: '#1B1714',
  textMutedOnLight: '#5B544C',

  // vinho. Referência #7B1D2A. Sobre dark não tem contraste → versão calibrada.
  wine: '#7B1D2A',
  wineOnDark: '#CF6075',

  // ocre: pontuação, 1–3% no máximo
  ochreOnLight: '#8F6B22',
  ochreOnDark: '#C9A55A',

  hairlineOnDark: 'rgba(241, 237, 232, 0.18)',
  hairlineOnLight: 'rgba(27, 23, 20, 0.2)',
};

/* ─── TYPOGRAPHY ───────────────────────────────────────────────── */
export const type = {
  wordmark: '"Anta", system-ui, sans-serif', // Wordmark — LOCKED
  // Gotham Rounded é licenciada: se o arquivo/instalação existir, é usada (local()).
  // Fallback provisório: Nunito (rounded, pesos reais, sem peso sintetizado).
  system: '"Gotham Rounded", "Nunito Variable", "Nunito", system-ui, sans-serif',
  accent: '"Mr Dafoe", cursive', // somente o "Re"
  trackingWordmark: '0.05em', // LOCKED (5%)

  micro: 'clamp(0.72rem, 0.68rem + 0.15vw, 0.82rem)',
  small: 'clamp(0.9rem, 0.86rem + 0.2vw, 1rem)',
  body: 'clamp(1rem, 0.95rem + 0.25vw, 1.15rem)',
  lead: 'clamp(1.2rem, 0.95rem + 1vw, 1.8rem)',
  statement: 'clamp(1.8rem, 1rem + 3.3vw, 4.2rem)',
  display: 'clamp(2.6rem, 1rem + 7vw, 7.5rem)',
  mega: 'clamp(3.4rem, 1rem + 16vw, 19rem)',
};

/* ─── SPACE / LAYOUT ───────────────────────────────────────────── */
export const space = {
  margin: 'clamp(1.25rem, 4.2vw, 5rem)',
  gutter: 'clamp(0.75rem, 1.8vw, 2rem)',
  section: 'clamp(6rem, 15vw, 15rem)',
  headerH: 'clamp(3.5rem, 6vw, 5rem)',
  pinPerception: '190svh', // comprimento do trecho "pinned" do Perception
  pinStage: '150svh', // idem, página comercial
};

/* ─── WORDMARK ─────────────────────────────────────────────────── */
export const wordmark = {
  heroSize: 'min(15.1vw, 34svh)',
  reScale: 0.98, // tamanho do "Re" Mr Dafoe relativo ao cap-height Anta
  reX: '-0.02em',
  reY: '-0.1em',
};

/* ─── MOTION — CALIBRATE IN BROWSER ────────────────────────────── */
export const motion = {
  dur: {
    fast: '180ms',
    base: '360ms',
    slow: '700ms',
    reveal: '1000ms',
    intro: '1100ms',
    wmWrite: '820ms', // "Re" sendo escrito
    wmFade: '260ms', // RE caps some
    wmHide: '380ms',
  },
  ease: {
    out: 'cubic-bezier(0.16, 1, 0.3, 1)',
    inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
    write: 'cubic-bezier(0.55, 0.05, 0.25, 1)',
  },
  stagger: { intro: '45ms' },
  // IntersectionObserver
  reveal: { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
  // Wordmark: dica de descoberta (sem hover)
  wordmarkHint: {
    touchDelay: 1500, // ms após entrar em vista
    hoverDelay: 6000, // dispositivos com hover: só se nunca houve hover
    hold: 2800, // quanto tempo a dica fica revelada
    viewThreshold: 0.6,
  },
  footerHold: { delay: 700, viewThreshold: 0.65 }, // timing/trigger do Re no footer
};

/* ─── AMBIENT: dark → light → dark — CALIBRATE IN BROWSER ──────── */
export const ambient = {
  // posição da fronteira (fração da altura do viewport; 1 = base, 0 = topo)
  edgeStart: 0.985, // sliver de luz no fundo do Hero
  edgeAfterHero: 0.94, // ao terminar o Hero
  edgeEnd: -0.5, // totalmente claro
  sweepEnd: 0.82, // fração do trecho pinned em que a revelação termina
  returnLead: 1.0, // footer: começa a escurecer quando o topo dele está a N viewports
  returnOverrun: 0.6, // o dark avança para dentro da seção anterior (em vh)
  shape: { tilt: 0.24, a1: 0.075, f1: 1.1, a2: 0.026, f2: 2.7 },
  phaseIn: { p1: 0.6, p2: 2.1, tiltSign: 1 },
  phaseOut: { p1: 3.4, p2: 0.9, tiltSign: -1 },
  points: 36,
};

/* ─── Injeção em :root ─────────────────────────────────────────── */
const kebab = (s) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

export function applyTokens(root = document.documentElement) {
  const set = (k, v) => root.style.setProperty(k, String(v));
  Object.entries(color).forEach(([k, v]) => set(`--color-${kebab(k)}`, v));
  set('--text-on-dark', color.textOnDark);
  set('--text-muted-on-dark', color.textMutedOnDark);
  set('--text-on-light', color.textOnLight);
  set('--text-muted-on-light', color.textMutedOnLight);
  set('--accent-on-dark', color.wineOnDark);
  set('--accent-on-light', color.wine);
  set('--punct-on-dark', color.ochreOnDark);
  set('--punct-on-light', color.ochreOnLight);
  set('--hairline-on-dark', color.hairlineOnDark);
  set('--hairline-on-light', color.hairlineOnLight);
  set('--surface-light', color.ivory);
  set('--surface-dark', color.charcoal);

  set('--font-wordmark', type.wordmark);
  set('--font-system', type.system);
  set('--font-accent', type.accent);
  set('--tracking-wordmark', type.trackingWordmark);
  ['micro', 'small', 'body', 'lead', 'statement', 'display', 'mega'].forEach((k) =>
    set(`--fs-${k}`, type[k]),
  );

  set('--margin', space.margin);
  set('--gutter', space.gutter);
  set('--space-section', space.section);
  set('--header-h', space.headerH);
  set('--pin-perception', space.pinPerception);
  set('--pin-stage', space.pinStage);

  set('--wm-hero-size', wordmark.heroSize);
  set('--re-scale', wordmark.reScale);
  set('--re-x', wordmark.reX);
  set('--re-y', wordmark.reY);

  Object.entries(motion.dur).forEach(([k, v]) => set(`--dur-${kebab(k)}`, v));
  Object.entries(motion.ease).forEach(([k, v]) => set(`--ease-${k}`, v));
  set('--stagger-intro', motion.stagger.intro);
}
