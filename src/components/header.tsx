import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/indexStore';
import { userSelectors } from '../store/slice/user/user';
import { getToken } from '../service/token';
import { fetchGetUserData, fetchUserLogout } from '../store/api-action';
import { SyntheticEvent, useEffect } from 'react';

export default function Header() {
  const selectors = useAppSelector;
  const token = getToken();
  const dispatch = useAppDispatch();
  const authorizationStatus = selectors(userSelectors.authorizationStatus);

  useEffect(() => {
    if (token) {
      dispatch(fetchGetUserData());
    }
  }, [token]);

  function onLogoutUserClick(evt: SyntheticEvent<HTMLAnchorElement>) {
    evt.preventDefault();
    dispatch(fetchUserLogout());
  }

  return (
    <header className="header">
      <div className="container container--size-l">
        <Link to={AppRoute.INDEX_PAGE}>
          <span className="logo header__logo">
            <svg width={134} height={52} aria-hidden="true">
              <use xlinkHref="#logo" />
            </svg>
          </span>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="link active" to={AppRoute.INDEX_PAGE}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.CONTACTS}>Контакты</Link>
            </li>
            {authorizationStatus &&
              <li className="main-nav__item">
                <Link className="link" to={AppRoute.FAVORITE}>Мои бронирования</Link>
              </li>}
          </ul>
        </nav>
        <div className="header__side-nav">
          {token !== ''
            ? <Link className="btn btn--accent header__side-item" to={''} onClick={onLogoutUserClick}>Выйти</Link>
            : <Link className="btn header__side-item header__login-btn" to={AppRoute.LOGIN_PAGE}>Вход</Link>}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header >

  );
}
