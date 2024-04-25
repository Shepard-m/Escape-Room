import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import IndexPage from '../pages/index-page';
import QuestPage from '../pages/quest-page';
import LoginPage from '../pages/login-page';
import ProtectedRoute from './private-route';

export default function App() {
  return (
    <Routes>
      <Route path={AppRoute.INDEX_PAGE}>
        <Route
          index
          element={<IndexPage />}
        />
        <Route
          path={`${AppRoute.QUEST_PAGE}/:questId`}
          element={<QuestPage />}
        />
        <Route
          path={AppRoute.LOGIN_PAGE}
          element={<ProtectedRoute onlyUnAuth><LoginPage /></ProtectedRoute>}
        />
      </Route>
    </Routes>
  );
}
