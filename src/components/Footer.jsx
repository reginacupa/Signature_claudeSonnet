import { Link } from 'react-router-dom';
import Tone from '../ambient/Tone.jsx';
import InteractiveWordmark from './InteractiveWordmark.jsx';
import { contact } from '../config/contact.js';
import { track } from '../utils/track.js';

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/signature.tec/',
    external: true,
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.9" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/signature-tec/',
    external: true,
    icon: (
      <>
        <path d="M6.5 10v7.5" />
        <circle cx="6.5" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
        <path d="M11 17.5V10m0 3.3c0-1.9 1.2-3.3 3.1-3.3s2.9 1.2 2.9 3.2v4.3" />
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      </>
    ),
  },
  {
    label: 'E-mail',
    href: `mailto:${contact.email}`,
    external: false,
    icon: (
      <>
        <rect x="3" y="5.5" width="18" height="13" rx="2" />
        <path d="m3.8 7.2 8.2 6.1 8.2-6.1" />
      </>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5547984653443',
    external: true,
    onClick: () => track('whatsapp_footer_click'),
    icon: (
      <>
        <path d="M3.8 20.2 5 16a8.2 8.2 0 1 1 3.1 3.1z" />
        <path d="M9.2 8.6c-.3.6-.2 1.5.6 2.8.9 1.4 2 2.3 3.3 2.7.8.2 1.4-.1 1.7-.7l-1.3-.9-.6.5c-.7-.3-1.5-1.1-1.8-1.8l.5-.6-.9-1.3z" />
      </>
    ),
  },
];

/**
 * Footer interativo (Master §16): fecha a experiência, não vende.
 * O dark retorna progressivamente (AmbientEngine, ancorado em [data-ambient-return]).
 * SIGNATURE → SIGNATURe reaparece como fechamento (hold ao entrar em vista).
 * Cada bloco de texto é um Tone independente (o dark sobe por dentro do footer).
 */
export default function Footer() {
  return (
    <footer className="footer" data-ambient-return>
      <div className="footer__top">
        <Tone as="nav" aria-label="Rodapé" className="footer__nav">
          <Link to="/#o-que-fazemos">O que fazemos</Link>
          <Link to="/#assinatura">Nosso trabalho</Link>
          <Link to="/contratar">Escolha sua presença</Link>
        </Tone>
        <Tone as="ul" className="footer__social" aria-label="Redes e contato">
          {socials.map(({ label, href, external, icon, onClick }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={onClick}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  {icon}
                </svg>
              </a>
            </li>
          ))}
        </Tone>
      </div>

      <div className="footer__mark">
        <InteractiveWordmark size="footer" hold />
      </div>

      <Tone as="p" className="footer__legal">
        © {new Date().getFullYear()} SignatuRe · {contact.domain}
      </Tone>
    </footer>
  );
}
