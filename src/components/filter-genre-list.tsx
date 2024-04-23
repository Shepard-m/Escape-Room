import { FilterOptions } from '../const';
import FilterGenreLink from './filter-genre-link';

type TFilterList = {
  handelSelectFilerClick: (filter: string) => void;
}

export default function FilterGenreList({ handelSelectFilerClick }: TFilterList) {
  const filtersValue = Object.values(FilterOptions);
  return (
    <ul className="filter__list">
      {filtersValue.map((filter) => <FilterGenreLink key={filter.name} handelSelectFilerClick={handelSelectFilerClick} filterOption={filter} />)}
    </ul>
  );
}
