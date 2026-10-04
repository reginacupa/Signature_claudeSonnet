import Tone from '../ambient/Tone.jsx';
import { copy } from '../content/copy.js';

/** 03 PRESENÇA — quieta. Duas frases, muito respiro. Nada além do aprovado. */
export default function Presence() {
  return (
    <section className="presence" aria-label="Presença">
      <Tone as="p" reveal className="presence__a">
        {copy.presence.a}
      </Tone>
      <Tone as="p" reveal className="presence__b">
        {copy.presence.b}
        <span className="punct">.</span>
      </Tone>
    </section>
  );
}
