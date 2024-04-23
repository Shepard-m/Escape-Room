import { FilterOptions } from '../const';
import FilterItem from './filter-item';

export default function FilterList() {
  const filtersValue = Object.values(FilterOptions);
  return (
    <ul className="filter__list">
      {filtersValue.map((filter) => <FilterItem key={filter.name} filterOption={filter} />)}
    </ul>
  );
}
