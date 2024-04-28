import dayjs from 'dayjs';
import { GenreTranslate, LevelTranslate } from '../const';

export function humanizeOrderData(date: string, format: string) {
  return date ? dayjs(date).format(format) : '';
}

export function translateLevel(level: string) {
  switch (level) {
    case LevelTranslate.EASY.eng:
      return LevelTranslate.EASY.rus;
    case LevelTranslate.MEDIUM.eng:
      return LevelTranslate.MEDIUM.rus;
    case LevelTranslate.HARD.eng:
      return LevelTranslate.HARD.rus;
    default:
      return level;
  }
}

export function translateGenre(genre: string) {
  switch (genre) {
    case GenreTranslate.ADVENTURES.eng:
      return GenreTranslate.ADVENTURES.rus;
    case GenreTranslate.DETECTIVE.eng:
      return GenreTranslate.DETECTIVE.rus;
    case GenreTranslate.HORROR.eng:
      return GenreTranslate.HORROR.rus;
    case GenreTranslate.MYSTIC.eng:
      return GenreTranslate.MYSTIC.rus;
    default:
      return genre;
  }
}
