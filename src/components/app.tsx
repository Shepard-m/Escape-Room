import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import IndexPage from '../pages/index-page';
import QuestPage from '../pages/quest-page';
import LoginPage from '../pages/login-page';
import ProtectedRoute from './private-route';
import BookingQuestPage from '../pages/booking-quest-page';
import FavoriteQuestPage from '../pages/favorite-quest-page';
import ContactsPage from '../pages/contacts-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import Container from './container';

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
        <Route
          path={`${AppRoute.BOOKING_PAGE}/:bookingId`}
          element={<ProtectedRoute><BookingQuestPage /></ProtectedRoute>}
        />
        <Route
          path={AppRoute.FAVORITE}
          element={<ProtectedRoute><FavoriteQuestPage /></ProtectedRoute>}
        />
        <Route
          path={AppRoute.CONTACTS}
          element={<ContactsPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}
