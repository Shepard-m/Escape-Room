import { Link } from 'react-router-dom';
import { AppRoute, TextErrors } from '../const';
import { SyntheticEvent } from 'react';
import { fetchUserLogout } from '../store/api-action';
import { useAppDispatch } from '../hooks/indexStore';
import { toast } from 'react-toastify';

type THeaderButton = {
  isLogin?: boolean;
  token: string;
}

export default function HeaderButton({ isLogin, token }: THeaderButton) {
  const dispatch = useAppDispatch();

  function onLogoutUserClick(evt: SyntheticEvent<HTMLAnchorElement>) {
    evt.preventDefault();
    dispatch(fetchUserLogout())
      .unwrap()
      .catch(() => {
        toast.error(TextErrors.LOGOUT);
      });
  }

  if (isLogin) {
    return;
  }

  if (token) {
    return <Link className='btn btn--accent header__side-item' to={''} onClick={onLogoutUserClick}>Выйти</Link>;
  } else {
    return <Link className='btn header__side-item header__login-btn' to={AppRoute.LOGIN_PAGE}>Вход</Link>;
  }
}

