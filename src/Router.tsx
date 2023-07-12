import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loader from './components/Loader';

const Home = lazy(() => import('./pages/home/index'));
const Issue = lazy(() => import('./pages/issue/index'));
const NotFound = lazy(() => import('./pages/notFound/index'));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
