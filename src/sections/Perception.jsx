import { SplitTone } from '../ambient/Tone.jsx';
import { copy } from '../content/copy.js';

/**
 * 02 PERCEPÇÃO — a luz sobe enquanto a frase permanece; a fronteira
 * atravessa as letras e cada uma troca de tom no instante em que muda de ambiente.
 */
export default function Perception() {
  const { lines, full } = copy.perception;
  return (
    <section
      id="percepcao"
      className="perception"
      data-ambient-sweep
      aria-label={full}
    >
      <div className="perception__stage">
        <p className="perception__statement">
          <span className="sr-only">{full}</span>
          <span aria-hidden="true">
            <span className="perception__l1">
              <SplitTone text={lines[0]} />
            </span>
            <span className="perception__l2">
              <SplitTone text={lines[1]} />
            </span>
            <span className="perception__l3">
              <SplitTone text={lines[2]} />
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}
