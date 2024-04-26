import { DefaultValue } from '../const';
import BookingListDate from '../components/booking-list-date';
import { TBooking } from '../types/booking';
import { SyntheticEvent, useState } from 'react';
import { TBookingResponseData } from '../types/booking-respones-data';
import { useAppDispatch } from '../hooks/indexStore';
import { fetchSendBookingQuest } from '../store/api-action';

type TFormBooking = {
  currentQuest: TBooking;
  countPeople: number[];
  questId: string;
}

export default function FormBooking({ currentQuest, countPeople, questId }: TFormBooking) {

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<TBookingResponseData>({
    placeId: questId,
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: 0,
  });

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

  function onSendDataBookingSubmit(evt: SyntheticEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(fetchSendBookingQuest(formData));
  }

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={onSendDataBookingSubmit}>
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
          <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" onChange={onInputNameChange} />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}" onChange={onInputPhoneChange} />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" name="person" placeholder="Количество участников" minLength={countPeople[0]} maxLength={countPeople[1]} required onChange={onInputPeopleCountChange} />
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
