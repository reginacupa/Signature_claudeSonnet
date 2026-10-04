import { Link } from 'react-router-dom';
import Tone from '../ambient/Tone.jsx';
import InteractiveWordmark from '../components/InteractiveWordmark.jsx';
import { copy } from '../content/copy.js';
import { cases } from '../content/cases.js';

/**
 * Case Study — recebe os assets reais do Case 01 via src/content/cases.js.
 * Sem mídia: o quadro mostra a própria marca (o case é a própria SignatuRe),
 * sem screenshots, mockups ou placeholders "em breve".
 */
function Media({ item, className }) {
  if (!item) return null;
  return (
    <picture className={className}>
      <img
        src={item.src}
        srcSet={item.srcSet}
        sizes="(min-width: 64em) 62vw, 92vw"
        width={item.width}
        height={item.height}
        alt={item.alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

export function CaseStudy({ data }) {
  const { desktop, mobile } = data.media;
  const hasMedia = Boolean(desktop);
  return (
    <article className="case" aria-labelledby={`case-${data.id}`}>
      <Tone reveal className="case__meta">
        <p className="case__index">Case {data.id}</p>
        <h3 id={`case-${data.id}`} className="case__title">
          {data.title}
        </h3>
        <p className="case__type">
          {data.type}
          <span> · {data.kind}</span>
        </p>
        <ul className="case__list" aria-label="Disciplinas">
          {data.disciplines.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </Tone>

      <div className={`case__stage${hasMedia ? ' has-media' : ''}`}>
        {hasMedia ? (
          <>
            <Media item={desktop} className="case__desktop" />
            <Media item={mobile} className="case__mobile" />
          </>
        ) : (
          <div className="case__frame">
            <InteractiveWordmark size="case" />
          </div>
        )}
      </div>
    </article>
  );
}

/** 05 ASSINATURA — abertura, Case 01, fechamento + CTA comercial final (LOCKED). */
export default function Signature() {
  const { opening, closing, cta } = copy.signature;
  return (
    <section id="assinatura" className="signature" aria-labelledby="signature-title">
      <Tone as="h2" id="signature-title" reveal className="signature__opening">
        {opening[0]}
        <br />
        {opening[1]}
      </Tone>

      {cases.map((c) => (
        <CaseStudy key={c.id} data={c} />
      ))}

      <div className="signature__close">
        <Tone as="p" reveal className="signature__closing">
          {closing[0]}
          <br />
          {closing[1]}
        </Tone>
        <Tone className="signature__cta">
          <Link to="/contratar" className="cta-bracket">
            <span className="cta-bracket__b" aria-hidden="true">
              [
            </span>
            <span className="cta-bracket__t">{cta}</span>
            <span className="cta-bracket__b cta-bracket__b--r" aria-hidden="true">
              ]
            </span>
          </Link>
        </Tone>
      </div>
    </section>
  );
}
