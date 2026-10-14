import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tone from '../ambient/Tone.jsx';
import InteractiveWordmark from './InteractiveWordmark.jsx';

/** Header mínimo. Na landing, o brand só aparece depois do Hero (que já tem o wordmark grande). */
export default function Header({ variant = 'landing' }) {
  const [reveal, setReveal] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const landing = variant === 'landing';
  const close = () => setOpen(false);

  /* Menu mobile: fecha ao navegar e com Esc (devolve o foco ao botão). */
  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        document.getElementById('header-menu-btn')?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <Tone as="header" className="header" data-variant={variant} data-menu={open ? 'open' : 'closed'}>
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
      <button
        id="header-menu-btn"
        type="button"
        className="header__toggle"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls="header-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="header__bars" aria-hidden="true" />
      </button>
      <nav id="header-nav" aria-label="Principal" className="header__nav" onClick={(e) => e.target.closest('a') && close()}>
        {landing ? (
          <>
            <Link to="/#o-que-fazemos">O que fazemos</Link>
            <Link to="/#assinatura">Nosso trabalho</Link>
            <Link to="/contratar">Escolha sua presença</Link>
          </>
        ) : (
          <Link to="/">Início</Link>
        )}
      </nav>
    </Tone>
  );
}
