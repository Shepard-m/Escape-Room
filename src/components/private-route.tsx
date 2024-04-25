import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../const';
import { useAppSelector } from '../hooks/indexStore';
import { userSelectors } from '../store/slice/user/user';

type TFromState = {
  from?: Location;
};

type TProtectedRouteProps = {
  children: JSX.Element;
  onlyUnAuth?: boolean;
}

export default function ProtectedRoute({ children, onlyUnAuth }: TProtectedRouteProps) {
  const user = useAppSelector(userSelectors.user);
  const location: Location<TFromState> = useLocation() as Location<TFromState>;

  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: AppRoute.INDEX_PAGE };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate state={{ from: location }} to={AppRoute.LOGIN_PAGE} />;
  }

  return children;
}
