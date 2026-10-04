import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import Tone, { SplitTone } from '../ambient/Tone.jsx';
import { contact } from '../config/contact.js';
import { care, flow, included, legal, notes, offers, payment } from '../content/commercial.js';

/**
 * Página comercial (/contratar). Mesmo universo: dark → light → dark.
 * Tipografia e ritmo, não tabela de preços SaaS. Sem formulário.
 */
export default function Commercial() {
  return (
    <>
      <Header variant="commercial" />
      <main id="conteudo">
        {/* ── abertura pinned: revela o light ── */}
        <section className="c-stage" data-ambient-sweep aria-labelledby="c-title">
          <div className="c-stage__pin">
            <Tone as="p" className="kicker">
              Condições
            </Tone>
            <h1 id="c-title" className="c-title">
              <SplitTone text="Conte pra gente" />
            </h1>
          </div>
        </section>

        {/* ── ofertas ── */}
        <section className="c-offers" aria-labelledby="c-offers-h">
          <Tone as="h2" id="c-offers-h" className="kicker">
            Projetos
          </Tone>
          <ul className="offers">
            {offers.map((o) => (
              <li key={o.name} className="offer">
                <Tone as="h3" className="offer__name">
                  {o.name}
                </Tone>
                <Tone className="offer__price">
                  {o.pre && <span className="offer__pre">{o.pre}</span>}
                  <strong className={o.pre ? '' : 'is-text'}>{o.price}</strong>
                </Tone>
                <Tone as="p" className="offer__meta">
                  {o.meta}
                </Tone>
              </li>
            ))}
          </ul>
        </section>

        {/* ── incluso / notas ── */}
        <section className="c-split" aria-labelledby="c-incl-h">
          <Tone as="h2" id="c-incl-h" className="kicker">
            Em todo projeto
          </Tone>
          <ul className="c-list">
            {included.map((t) => (
              <Tone as="li" key={t}>
                {t}
              </Tone>
            ))}
          </ul>
        </section>

        {/* ── fluxo ── */}
        <section className="c-flow" aria-labelledby="c-flow-h">
          <Tone as="h2" id="c-flow-h" className="kicker">
            Como funciona
          </Tone>
          <ol className="flow">
            {flow.map((s, i) => (
              <Tone as="li" key={s} className="flow__step">
                <span className="flow__n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s}
              </Tone>
            ))}
          </ol>
          <ul className="c-list c-list--quiet">
            {notes.map((t) => (
              <Tone as="li" key={t}>
                {t}
              </Tone>
            ))}
          </ul>
        </section>

        {/* ── pagamento ── */}
        <section className="c-pay" aria-labelledby="c-pay-h">
          <Tone as="h2" id="c-pay-h" className="kicker">
            Pagamento
          </Tone>
          <div className="pay">
            {payment.parts.map((p) => (
              <Tone key={p.t} className="pay__part">
                <span className="pay__n">{p.n}</span>
                <span className="pay__t">{p.t}</span>
              </Tone>
            ))}
          </div>
          <Tone as="p" className="c-note">
            {payment.proposal}
          </Tone>
        </section>

        {/* ── care ── */}
        <section className="c-care" aria-labelledby="c-care-h">
          <Tone as="h2" id="c-care-h" className="kicker">
            {care.name}
          </Tone>
          <Tone className="care__price">{care.price}</Tone>
          <ul className="care__values">
            {care.values.map((v) => (
              <Tone as="li" key={v}>
                {v}
              </Tone>
            ))}
          </ul>
          <ul className="c-list">
            {care.details.map((t) => (
              <Tone as="li" key={t}>
                {t}
              </Tone>
            ))}
          </ul>
          <Tone as="p" className="c-note">
            {care.adhoc}
          </Tone>
        </section>

        {/* ── ação final: WhatsApp ── */}
        <section className="c-final" aria-label="Contato">
          <WhatsAppCTA label="Conte pra gente" className="c-final__cta" />
          <Tone as="p" className="c-note">
            WhatsApp · <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </Tone>
          <Tone as="p" className="c-note c-note--legal">
            {legal}
          </Tone>
        </section>
      </main>
      <Footer />
    </>
  );
}
