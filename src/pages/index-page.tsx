import { useEffect } from 'react';
import Container from '../components/container';
import FilterGenreList from '../components/filter-genre-list';
import QuestCards from '../components/quest-cards';
import FilterLevelList from '../components/filter-level-list';
import { FilterOptions } from '../const';
import { MainPageClass } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/indexStore';
import { fetchQuestCardPreview } from '../store/api-action';
import { questsSelectors, questsActions } from '../store/slice/quests/quests';

export default function IndexPage() {
  const dispatch = useAppDispatch();
  const selectors = useAppSelector;

  const quests = selectors(questsSelectors.quests);
  useEffect(() => {
    dispatch(fetchQuestCardPreview())
      .unwrap()
      .then(() => {
        dispatch(questsActions.filterQuestsGenre({ filter: FilterOptions.ALL.id }));
      })
      .catch();
  }, [dispatch]);

  const handelSelectFilerGenreClick = (filter: string) => {
    dispatch(questsActions.filterQuestsGenre({ filter: filter }));
  };

  const handelSelectFilerLevelClick = (filter: string) => {
    dispatch(questsActions.filterQuestsLevel({ filter: filter }));
  };

  return (
    <Container mainClass={MainPageClass.INDEX}>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
        </div>
        <div className="page-content__item">
          <form className="filter" action="#" method="get">
            <fieldset className="filter__section">
              <legend className="visually-hidden">Тематика</legend>
              <FilterGenreList handelSelectFilerClick={handelSelectFilerGenreClick} />
            </fieldset>
            <fieldset className="filter__section">
              <legend className="visually-hidden">Сложность</legend>
              <FilterLevelList handelSelectFilerLevelClick={handelSelectFilerLevelClick} />
            </fieldset>
          </form>
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <QuestCards questCards={quests} />
      </div>

    </Container>
  );
}
