import { SyntheticEvent } from 'react';
import { FilterLevelOption } from '../const';
import { useAppSelector } from '../hooks/indexStore';
import { questsSelectors } from '../store/slice/quests/quests';

type TPropsSortLink = {
  FilterOption: typeof FilterLevelOption.ANY;
  handelSelectFilerLevelClick: (filter: string) => void;
}

export default function FilterLevelLink({ FilterOption, handelSelectFilerLevelClick }: TPropsSortLink) {
  const selectors = useAppSelector;

  const currentFilterLevel = selectors(questsSelectors.currentFilterLevel);

  const onSelectFilter = (evt: SyntheticEvent<HTMLInputElement>) => {
    handelSelectFilerLevelClick(evt.currentTarget.id);
  };
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={FilterOption.id} checked={FilterOption.id === currentFilterLevel} onChange={onSelectFilter} />
      <label className="filter__label" htmlFor={FilterOption.id} >
        <span className="filter__label-text">{FilterOption.name}</span>
      </label>
    </li>
  );
}
