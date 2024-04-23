import { Route, Routes } from 'react-router-dom';
import { ApiRoute } from '../const';
import IndexPage from '../pages/index-page';

export default function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={<IndexPage />}
        />
      </Route>
    </Routes>
  );
}
{/*  */ }
