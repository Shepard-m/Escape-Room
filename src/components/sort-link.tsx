import { SortOption } from '../const';

type TPropsSortLink = {
  sortOption: typeof SortOption.ANY;
}

export default function SortLink({ sortOption }: TPropsSortLink) {
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={sortOption.id} />
      <label className="filter__label" htmlFor={sortOption.id}><span className="filter__label-text">{sortOption.name}</span>
      </label>
    </li>
  );
}
