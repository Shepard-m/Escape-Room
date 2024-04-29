import { SyntheticEvent } from 'react';
import { FilterLevelOption } from '../const';

type TPropsSortLink = {
  FilterOption: typeof FilterLevelOption.ANY;
  handelSelectFilerLevelClick: (filter: string) => void;
}

export default function FilterLevelLink({ FilterOption, handelSelectFilerLevelClick }: TPropsSortLink) {

  const onSelectFilter = (evt: SyntheticEvent<HTMLLabelElement>) => {
    handelSelectFilerLevelClick(evt.currentTarget.htmlFor);
  };
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={FilterOption.id} defaultChecked={FilterOption.id === FilterLevelOption.ANY.id} />
      <label className="filter__label" htmlFor={FilterOption.id} onClick={onSelectFilter}>
        <span className="filter__label-text">{FilterOption.name}</span>
      </label>
    </li>
  );
}
