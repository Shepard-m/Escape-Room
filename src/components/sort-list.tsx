import { SortOption } from '../const';
import SortLink from './sort-link';

export default function SortList() {
  const sortOptionValues = Object.values(SortOption);
  return (
    <ul className="filter__list">
      {sortOptionValues.map((option) => <SortLink key={option.name} sortOption={option} />)}
    </ul>
  );
}
