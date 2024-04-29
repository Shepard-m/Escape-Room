import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/indexStore';
import { fetchUserLogin } from '../store/api-action';
import Container from '../components/container';
import { ListDataNamePage, MainPageClass, OptionValidation, TextErrors } from '../const';
import { useForm } from 'react-hook-form';
import { TValidationFormLogin } from '../types/validation-form-login';
import { toast } from 'react-toastify';
import { questsActions } from '../store/slice/quests/quests';

export default function LoginPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(questsActions.selectActivePage({ activePage: ListDataNamePage.FAVORITES }));
  });

  const { register, handleSubmit, formState: { errors } } = useForm<TValidationFormLogin>();

  const [userData, setUserData] = useState({ email: '', password: '' });

  function onInputEmailChange(evt: SyntheticEvent<HTMLInputElement>) {
    setUserData({ ...userData, email: evt.currentTarget.value });
  }
  function onInputPasswordChange(evt: SyntheticEvent<HTMLInputElement>) {
    setUserData({ ...userData, password: evt.currentTarget.value });
  }

  function onSendUserDataSubmit() {
    dispatch(fetchUserLogin(userData))
      .unwrap()
      .then(() => {
        setUserData({ email: '', password: '' });
      })
      .catch(() => {
        toast.error(TextErrors.LOGIN);
      });
  }

  return (
    <Container mainClass={MainPageClass.LOGIN} isLogin>
      <div>
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width={1366} height={768} alt={''} />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form className="login-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={(event) =>
              void handleSubmit(onSendUserDataSubmit)(event)}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;–&nbsp;mail</label>
                    <input type="email" id="email" placeholder="Адрес электронной почты" {...register('email', {
                      required: TextErrors.LOGIN_EMAILS,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                        message: TextErrors.LOGIN_EMAILS,
                      },
                      onChange: onInputEmailChange
                    })} required
                    />
                    {errors?.email &&
                      <span style={{ color: 'red' }}> {errors.email.message} </span>}
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input type="password" id="password" placeholder="Пароль" {...register('password', {
                      required: 'некорректный пароль',
                      maxLength: {
                        value: 15,
                        message: 'Пароль больше 15 символов'
                      },
                      minLength: {
                        value: 3,
                        message: 'Пароль меньше 3 символов'
                      },
                      pattern: {
                        value: OptionValidation.PASSWORD.pattern,
                        message: TextErrors.LOGIN_PASSWORD_TEXT
                      },
                      onChange: onInputPasswordChange
                    })} required
                    />
                    {errors?.password &&
                      <div style={{ color: 'red' }}> {errors.password.message} </div>}
                  </div>
                </div>
                <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="#">
                    правилами обработки персональных данных
                  </a>
                  &nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
