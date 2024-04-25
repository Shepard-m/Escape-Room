import { TQuestCardPreview } from './quest-card-preview';

export type TQuest = {
  description: string;
  coverImg: string;
  coverImgWebp: string;
} & TQuestCardPreview
