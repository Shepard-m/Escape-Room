import { FilterLevelOption } from '../const';
import FilterLevelLink from './filter-level-link';

type TFilterLevelList = {
  handelSelectFilerLevelClick: (filter: string) => void;
}

export default function FilterLevelList({ handelSelectFilerLevelClick }: TFilterLevelList) {
  const sortOptionValues = Object.values(FilterLevelOption);
  return (
    <ul className="filter__list">
      {sortOptionValues.map((option) => <FilterLevelLink key={option.name} handelSelectFilerLevelClick={handelSelectFilerLevelClick} FilterOption={option} />)}
    </ul>
  );
}
