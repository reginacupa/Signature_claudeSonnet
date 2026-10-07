import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tone from '../ambient/Tone.jsx';
import InteractiveWordmark from './InteractiveWordmark.jsx';

/** Header mínimo. Na landing, o brand só aparece depois do Hero (que já tem o wordmark grande). */
export default function Header({ variant = 'landing' }) {
  const [reveal, setReveal] = useState(false);
  const landing = variant === 'landing';
  return (
    <Tone as="header" className="header" data-variant={variant}>
      <Link
        to="/"
        className="header__brand"
        aria-label="SignatuRe — início"
        onPointerEnter={(e) => e.pointerType === 'mouse' && setReveal(true)}
        onPointerLeave={() => setReveal(false)}
        onFocus={(e) => e.target.matches(':focus-visible') && setReveal(true)}
        onBlur={() => setReveal(false)}
      >
        <InteractiveWordmark as="span" size="header" revealed={reveal} />
      </Link>
      <nav aria-label="Principal" className="header__nav">
        {landing ? (
          <>
            <Link to="/#o-que-fazemos">O que fazemos</Link>
            <Link to="/#assinatura">Assinatura</Link>
            <Link to="/contratar">Conte pra gente</Link>
          </>
        ) : (
          <Link to="/">Início</Link>
        )}
      </nav>
    </Tone>
  );
}
