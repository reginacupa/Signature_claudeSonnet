import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AmbientEngine from './ambient/AmbientEngine.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <AmbientEngine />
      <div className="app">
        <ScrollManager />
        <Outlet />
      </div>
    </>
  );
}
