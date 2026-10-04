import { Link } from 'react-router-dom';
import Tone from '../ambient/Tone.jsx';
import InteractiveWordmark from './InteractiveWordmark.jsx';
import { contact, whatsappUrl } from '../config/contact.js';
import { track } from '../utils/track.js';

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
          <Link to="/#assinatura">Assinatura</Link>
          <Link to="/contratar">Conte pra gente</Link>
        </Tone>
        <Tone className="footer__contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('whatsapp_footer_click')}
          >
            WhatsApp
          </a>
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
