import { TBookingData } from './booking-data';

export type TBooking = {
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  slots: {
    today: TBookingData[];
    tomorrow: TBookingData[];
  };
};
