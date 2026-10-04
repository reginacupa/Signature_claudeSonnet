import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../sections/Hero.jsx';
import Perception from '../sections/Perception.jsx';
import Presence from '../sections/Presence.jsx';
import Services from '../sections/Services.jsx';
import Signature from '../sections/Signature.jsx';

export default function Landing() {
  return (
    <>
      <Header variant="landing" />
      <main id="conteudo">
        <Hero />
        <Perception />
        <Presence />
        <Services />
        <Signature />
      </main>
      <Footer />
    </>
  );
}
