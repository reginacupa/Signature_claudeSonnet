import { track } from '../utils/track.js';
import { whatsappConfigured, whatsappUrl } from '../config/contact.js';
import { SHOW_PROVISIONAL_MARKERS } from '../config/site.js';
import Tone from '../ambient/Tone.jsx';

/** Ação comercial final: abre conversa no WhatsApp. URL/telefone: src/config/contact.js */
export default function WhatsAppCTA({ label = 'Conte pra gente', className = '' }) {
  return (
    <Tone as="div" className={`wa ${className}`}>
      <a
        className="cta-bracket"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('whatsapp_cta_click', { label })}
      >
        <span className="cta-bracket__b" aria-hidden="true">
          [
        </span>
        <span className="cta-bracket__t">{label}</span>
        <span className="cta-bracket__b cta-bracket__b--r" aria-hidden="true">
          ]
        </span>
        <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
      </a>
      {SHOW_PROVISIONAL_MARKERS && !whatsappConfigured() && (
        <p className="provisional">provisório · número do WhatsApp pendente (src/config/contact.js)</p>
      )}
    </Tone>
  );
}
