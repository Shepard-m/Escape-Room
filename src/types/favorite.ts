import { TBookingResponseData } from './booking-respones-data';
import { TLocation } from './location';
import { TQuestCardPreview } from './quest-card-preview';

// type Ttest = Omit<TBookingResponseData, 'placeId'>;

export type TFavorite = {
  location: TLocation;
  id: string;
  quest: TQuestCardPreview;
} & Omit<TBookingResponseData, 'placeId'>;
