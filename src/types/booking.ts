import { TBookingData } from './booking-data';
import { TLocation } from './location';

export type TBooking = {
  id: string;
  location: TLocation;
  slots: {
    today: TBookingData[];
    tomorrow: TBookingData[];
  };
};
