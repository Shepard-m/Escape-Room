import { SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../hooks/indexStore';
import { fetchUserLogin } from '../store/api-action';
import Container from '../components/container';
import { ErrorMessage, MainPageClass } from '../const';
import { useForm } from 'react-hook-form';
import { TValidationFormLogin } from '../types/validation-form-login';

export default function LoginPage() {
  const dispatch = useAppDispatch();


  const { register, formState: { errors } } = useForm<TValidationFormLogin>();

  const [userData, setUserData] = useState({ email: '', password: '' });

  function onInputEmailChange(evt: SyntheticEvent<HTMLInputElement>) {
    setUserData({ ...userData, email: evt.currentTarget.value });
  }
  function onInputPasswordChange(evt: SyntheticEvent<HTMLInputElement>) {
    setUserData({ ...userData, password: evt.currentTarget.value });
  }

  function onSendUserDataSubmit(evt: SyntheticEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(fetchUserLogin(userData));
  }

  return (
    <Container mainClass={MainPageClass.LOGIN}>
      <div>
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width={1366} height={768} alt={''} />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form className="login-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={onSendUserDataSubmit}>
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;–&nbsp;mail</label>
                    <input type="email" id="email" placeholder="Адрес электронной почты" {...(register('email', {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                        message: ErrorMessage.EMAIL
                      },
                      onChange: onInputEmailChange
                    }))} required onChange={onInputEmailChange}
                    />
                    {errors?.email && (
                      <div style={{ color: 'red' }}> {errors.email.message} </div>
                    )}
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input type="password" id="password" name="password" placeholder="Пароль" required onChange={onInputPasswordChange} />
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
