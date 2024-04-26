import { TBookingData } from '../types/booking-data';
import BookingDate from './booking-date';

type TBookingListDate = {
  dates: TBookingData[];
  defaultData: string;
  handelSelectTimeClick: (time: string, data: string) => void;
}

export default function BookingListDate({ dates, defaultData, handelSelectTimeClick }: TBookingListDate) {
  return (
    <div className="booking-form__date-inner-wrapper">
      {dates.map((date) => <BookingDate key={date.time} defaultData={defaultData} timeOption={date} handelSelectTimeClick={handelSelectTimeClick} />)}
    </div>
  );
}
