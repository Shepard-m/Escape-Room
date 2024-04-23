import Container from '../components/container';
import FilterList from '../components/filter-list';
import QuestCards from '../components/quest-cards';
import SortList from '../components/sort-list';
import { MainPageClass } from '../const';

export default function IndexPage() {
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
              <FilterList />
            </fieldset>
            <fieldset className="filter__section">
              <legend className="visually-hidden">Сложность</legend>
              <SortList />
            </fieldset>
          </form>
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <QuestCards questCards={[]} />
      </div>

    </Container>
  );
}
