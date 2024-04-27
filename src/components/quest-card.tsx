import { Link } from 'react-router-dom';
import { TQuestCardPreview } from '../types/quest-card-preview';
import { AppRoute } from '../const';
import { useAppDispatch } from '../hooks/indexStore';
import { fetchFavoriteDeleteQuest } from '../store/api-action';
import { favoriteActions } from '../store/slice/favorite/favorite';

type TQuestCard = {
  questCard: TQuestCardPreview;
  isFavorite?: boolean;
  peopleCount?: number;
  date?: string;
  time?: string;
  location?: string;
  id?: string;
}

export default function QuestCard({ questCard, isFavorite, peopleCount, date, time, location, id }: TQuestCard) {
  const dispatch = useAppDispatch();

  function onDeleteFromFavoritesSubmit() {
    dispatch(fetchFavoriteDeleteQuest(id as string))
      .unwrap()
      .then(() => {
        dispatch(favoriteActions.deleteQuest({ id: id as string }));
      });
  }

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <Link to={`${AppRoute.QUEST_PAGE}/${questCard.id}`}>
          <picture>
            <source type="image/webp" srcSet={`${questCard.previewImgWebp}, ${questCard.previewImgWebp} 2x`} />
            <img src={`${questCard.previewImg}`} srcSet={`${questCard.previewImg} 2x`} width={344} height={232} alt="Мужчина в клетке в подземелье." />
          </picture>
        </Link>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.QUEST_PAGE}/${questCard.id}`}>{questCard.title}</Link>
          {isFavorite && <span className="quest-card__info">{`[${date as string}, ${time as string}. ${location as string}]`}</span>}
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>{isFavorite
              ? peopleCount
              : `${questCard.peopleMinMax[0]}–${questCard.peopleMinMax[1]}`}
            &nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {questCard.level}
          </li>
        </ul>
        {isFavorite &&
          <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={onDeleteFromFavoritesSubmit}>
            Отменить
          </button>}
      </div>
    </div>
  );
}
