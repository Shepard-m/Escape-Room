import { DataFormat } from '../const';
import { TBookingData } from '../types/booking-data';
import { humanizeOrderData } from '../utils/utils';

type TBookingDate = {
  timeOption: TBookingData;
  defaultData: string;
}

export default function BookingDate({ timeOption, defaultData }: TBookingDate) {
  const hour = humanizeOrderData(timeOption.time, DataFormat.HOUR);
  const minute = humanizeOrderData(timeOption.time, DataFormat.MINUTE);
  return (
    <label className="custom-radio booking-form__date">
      <input type="radio" id="today9h45m" name="date" required defaultValue={`${defaultData}${hour}${minute}`} disabled={!timeOption.isAvailable} /><span className="custom-radio__label">{timeOption.time}</span>
    </label>
  );
}
