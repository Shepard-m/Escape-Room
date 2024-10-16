import { Link } from 'react-router-dom';
import { AppRoute, ListDataNamePage } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/indexStore';
import { userSelectors } from '../store/slice/user/user';
import { getToken } from '../service/token';
import { fetchGetUserData } from '../store/api-action';
import { SyntheticEvent, useEffect } from 'react';
import HeaderButton from './header-button';
import { questsActions, questsSelectors } from '../store/slice/quests/quests';

type THeader = {
  isLogin?: boolean;
}

export default function Header({ isLogin }: THeader) {
  const selectors = useAppSelector;
  const token = getToken();
  const dispatch = useAppDispatch();
  const activePage = selectors(questsSelectors.activePage);
  const user = selectors(userSelectors.user);

  useEffect(() => {
    if (token) {
      dispatch(fetchGetUserData());
    }
  }, [token]);

  function onSelectActivePageClick(evt: SyntheticEvent<HTMLAnchorElement>) {
    dispatch(questsActions.selectActivePage({ activePage: evt.currentTarget.getAttribute('data-name') as string }));
  }

  function onSelectActivePageLogoClick() {
    dispatch(questsActions.selectActivePage({ activePage: ListDataNamePage.QUEST }));
  }

  return (
    <header className="header">
      <div className="container container--size-l">
        <Link to={AppRoute.INDEX_PAGE} onClick={onSelectActivePageLogoClick}>
          <span className="logo header__logo">
            <svg width={134} height={52} aria-hidden="true">
              <use xlinkHref="#logo" />
            </svg>
          </span>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item" >
              <Link className={`link ${activePage === ListDataNamePage.QUEST ? 'active' : ''}`} to={AppRoute.INDEX_PAGE} data-name={ListDataNamePage.QUEST} onClick={onSelectActivePageClick}>Квесты</Link>
            </li>
            <li className="main-nav__item" >
              <Link className={`link ${activePage === ListDataNamePage.CONTACTS ? 'active' : ''}`} to={AppRoute.CONTACTS} data-name={ListDataNamePage.CONTACTS} onClick={onSelectActivePageClick}>Контакты</Link>
            </li>
            {user &&
              <li className="main-nav__item">
                <Link className={`link ${activePage === ListDataNamePage.FAVORITES ? 'active' : ''}`} to={AppRoute.FAVORITE} data-name={ListDataNamePage.FAVORITES} onClick={onSelectActivePageClick}>Мои бронирования</Link>
              </li>}
          </ul>
        </nav>
        <div className="header__side-nav">
          <HeaderButton isLogin={isLogin} token={user as string} />
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header >

  );
}
