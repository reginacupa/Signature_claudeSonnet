import { Link } from 'react-router-dom';
import Tone from '../ambient/Tone.jsx';
import InteractiveWordmark from '../components/InteractiveWordmark.jsx';
import { copy } from '../content/copy.js';
import { SHOW_PROVISIONAL_MARKERS } from '../config/site.js';

/**
 * 01 HERO — dark-first. A faixa de luz no rodapé do viewport (AmbientEngine)
 * sugere que o ambiente vai continuar se transformando.
 */
export default function Hero() {
  const { headline, tagline, cta } = copy.hero;
  return (
    <section className="hero" aria-labelledby="hero-title" data-section="hero">
      <div className="hero__top">
        <Tone as="h1" id="hero-title" className="hero__headline intro-rise">
          {headline}
        </Tone>
        <Tone className="hero__cta intro-rise" style={{ '--d': '220ms' }}>
          <Link to={cta.to} className="link-line">
            <span>{cta.label}</span>
            <span className="link-line__rule" aria-hidden="true" />
          </Link>
          {SHOW_PROVISIONAL_MARKERS && (
            <span className="provisional">label provisório · a calibrar</span>
          )}
        </Tone>
      </div>

      <Tone as="p" className="hero__tagline intro-rise" style={{ '--d': '420ms' }}>
        {tagline}
      </Tone>

      <div className="hero__mark">
        <InteractiveWordmark size="hero" hint="once" intro />
      </div>
    </section>
  );
}
