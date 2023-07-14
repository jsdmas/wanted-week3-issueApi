import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loader from './components/Loader';
import { PATH } from './constants/path';

const Home = lazy(() => import('./pages/home/index'));
const Issue = lazy(() => import('./pages/issuePage/index'));
const NotFound = lazy(() => import('./pages/notFound/index'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/index'));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.ISSUE_ID} element={<Issue />} />
          <Route path={PATH.ALL} element={<NotFound />} />
          <Route path={PATH.ERROR_PAGE} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
