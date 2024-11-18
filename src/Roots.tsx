import { HashRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { App } from './App';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const PeoplePage = lazy(() => import('./pages/PeoplePage/PeoplePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const Root = () => (
  <HashRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="people" element={<PeoplePage />}>
            <Route index element={<PeoplePage />} />
            <Route path=":personId" element={<PeoplePage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  </HashRouter>
);
