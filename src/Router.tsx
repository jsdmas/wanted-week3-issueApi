import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/index'));
const Issue = lazy(() => import('./pages/issue/index'));

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issue" element={<Issue />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
