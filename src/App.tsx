import { HashRouter, Routes, Route } from 'react-router-dom';

import { Home, Stack, NotFound, Portfolio } from './pages';
import { LayoutWrapper } from './components/layout';

export function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutWrapper>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
