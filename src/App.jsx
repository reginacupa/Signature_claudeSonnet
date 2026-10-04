import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Landing from './pages/Landing.jsx';

const Commercial = lazy(() => import('./pages/Commercial.jsx'));

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route
            path="contratar"
            element={
              <Suspense fallback={null}>
                <Commercial />
              </Suspense>
            }
          />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
