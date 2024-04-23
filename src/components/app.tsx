import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import IndexPage from '../pages/index-page';

export default function App() {
  return (
    <Routes>
      <Route path={AppRoute.INDEX_PAGE}>
        <Route
          index
          element={<IndexPage />}
        />
      </Route>
    </Routes>
  );
}
