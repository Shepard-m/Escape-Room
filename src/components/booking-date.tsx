import { DataFormat } from '../const';
import { TBookingData } from '../types/booking-data';
import { humanizeOrderData } from '../utils/utils';

type TBookingDate = {
  timeOption: TBookingData;
  defaultData: string;
  handelSelectTimeClick: (time: string, data: string) => void;
}

export default function BookingDate({ timeOption, defaultData, handelSelectTimeClick }: TBookingDate) {

  function onSelectTimeClick() {
    handelSelectTimeClick(timeOption.time, defaultData);
  }

  const hour = humanizeOrderData(timeOption.time, DataFormat.HOUR);
  const minute = humanizeOrderData(timeOption.time, DataFormat.MINUTE);
  return (
    <label className="custom-radio booking-form__date">
      <input type="radio" id="today9h45m" name="date" required defaultValue={`${defaultData}${hour}${minute}`} disabled={!timeOption.isAvailable} onClick={onSelectTimeClick} /><span className="custom-radio__label">{timeOption.time}</span>
    </label>
  );
}
