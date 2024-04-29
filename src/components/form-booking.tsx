import { AppRoute, DefaultValue, OptionValidation, TextErrors } from '../const';
import BookingListDate from '../components/booking-list-date';
import { TBooking } from '../types/booking';
import { SyntheticEvent, useEffect, useState } from 'react';
import { TBookingResponseData } from '../types/booking-respones-data';
import { useAppDispatch } from '../hooks/indexStore';
import { fetchSendBookingQuest } from '../store/api-action';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { TFormBookingValidation } from '../types/form-booking';

type TFormBooking = {
  currentQuest: TBooking;
  countPeople: number[];
  questId: string;
}

export default function FormBooking({ currentQuest, countPeople, questId }: TFormBooking) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<TFormBookingValidation>();

  const [formData, setFormData] = useState<TBookingResponseData>({
    placeId: currentQuest.id,
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: true,
    peopleCount: 0,
  });

  useEffect(() => {
    setFormData({ ...formData, placeId: currentQuest.id });
  }, [currentQuest]);

  function onInputNameChange(e: SyntheticEvent<HTMLInputElement>) {
    setFormData({ ...formData, contactPerson: e.currentTarget.value });
  }
  function onInputPhoneChange(e: SyntheticEvent<HTMLInputElement>) {
    setFormData({ ...formData, phone: e.currentTarget.value });
  }
  function onInputWithChildrenClick() {
    setFormData({ ...formData, withChildren: !formData.withChildren });
  }
  function handelSelectTimeClick(time: string, data: string) {
    setFormData({ ...formData, date: data, time: time });
  }
  function onInputPeopleCountChange(e: SyntheticEvent<HTMLInputElement>) {
    setFormData({ ...formData, peopleCount: +e.currentTarget.value });
  }

  function onSendDataBookingSubmit() {
    dispatch(fetchSendBookingQuest({ formData, id: questId }))
      .unwrap()
      .then(() => {
        navigate(AppRoute.FAVORITE);
      })
      .catch(() => {
        toast.error(TextErrors.BOOKING);
      });
  }

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={(event) =>
      void handleSubmit(onSendDataBookingSubmit)(event)}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <BookingListDate dates={currentQuest.slots.today} defaultData={DefaultValue.TODAY} handelSelectTimeClick={handelSelectTimeClick} />
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <BookingListDate dates={currentQuest.slots.tomorrow} defaultData={DefaultValue.TOMORROW} handelSelectTimeClick={handelSelectTimeClick} />
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" id="name" placeholder="Имя" {...register('name', {
            required: TextErrors.NAME,
            pattern: {
              value: OptionValidation.NAME.pattern,
              message: TextErrors.NAME,
            },
            minLength: {
              value: OptionValidation.NAME.min,
              message: TextErrors.NAME_MIN
            },
            maxLength: {
              value: OptionValidation.NAME.max,
              message: TextErrors.NAME_MAX
            },
            onChange: onInputNameChange
          })} required
          />
          {errors?.name &&
            <span style={{ color: 'red' }}> {errors.name.message} </span>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" placeholder="Телефон" {...register('tel', {
            required: TextErrors.PHONE,
            pattern: {
              value: OptionValidation.PHONE.pattern,
              message: TextErrors.PHONE,
            },
            onChange: onInputPhoneChange
          })} required
          />
          {errors?.tel &&
            <span style={{ color: 'red' }}> {errors.tel.message} </span>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" placeholder="Количество участников" {...register('person', {
            required: TextErrors.PERSON,
            min: {
              value: countPeople[0],
              message: `${TextErrors.PERSON_MIN} ${countPeople[0]}`
            },
            max: {
              value: countPeople[1],
              message: `${TextErrors.PERSON_MAX} ${countPeople[1]}`
            },
            onChange: onInputPeopleCountChange
          })} required
          />
          {errors?.person &&
            <span style={{ color: 'red' }}> {errors.person.message} </span>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" name="children" defaultChecked />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label" onClick={onInputWithChildrenClick}>Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">
        Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
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
  );
}
