import { SyntheticEvent } from 'react';
import { FilterOptions } from '../const';

type TPropsFilterItem = {
  filterOption: typeof FilterOptions.ALL;
  handelSelectFilerClick: (filter: string) => void;
}

export default function FilterGenreLink({ filterOption, handelSelectFilerClick }: TPropsFilterItem) {
  const onSelectFilter = (evt: SyntheticEvent<HTMLInputElement>) => {
    handelSelectFilerClick(evt.currentTarget.id);
  };
  return (
    <li className="filter__item">
      <input type="radio" name="type" id={filterOption.id} defaultChecked={filterOption.id === FilterOptions.ALL.id} onChange={onSelectFilter} />
      <label className="filter__label" htmlFor={filterOption.id}>
        <svg className="filter__icon" width={26} height={30} aria-hidden="true">
          <use xlinkHref={`#icon-${filterOption.iconName}`} />
        </svg><span className="filter__label-text">{filterOption.name}</span>
      </label>
    </li>
  );
}
