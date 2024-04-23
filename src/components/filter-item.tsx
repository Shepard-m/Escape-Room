import { FilterOptions } from '../const';

type TPropsFilterItem = {
  filterOption: typeof FilterOptions.ALL;
}

export default function FilterItem({ filterOption }: TPropsFilterItem) {
  return (
    <li className="filter__item">
      <input type="radio" name="type" id={filterOption.id} defaultChecked={filterOption.id === FilterOptions.ALL.id} />
      <label className="filter__label" htmlFor={filterOption.id}>
        <svg className="filter__icon" width={26} height={30} aria-hidden="true">
          <use xlinkHref={`#icon-${filterOption.iconName}`} />
        </svg><span className="filter__label-text">{filterOption.name}</span>
      </label>
    </li>
  );
}
