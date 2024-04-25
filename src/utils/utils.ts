import dayjs from 'dayjs';

export function humanizeOrderData(date: string, format: string) {
  return date ? dayjs(date).format(format) : '';
}
