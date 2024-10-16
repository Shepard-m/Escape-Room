import { TBookingResponseData } from './booking-respones-data';
import { TLocation } from './location';
import { TQuestCardPreview } from './quest-card-preview';

export type TFavorite = {
  location: TLocation;
  id: string;
  quest: TQuestCardPreview;
} & Omit<TBookingResponseData, 'placeId'>;
