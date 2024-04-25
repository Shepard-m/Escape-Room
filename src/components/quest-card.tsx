import { Link } from 'react-router-dom';
import { TQuestCardPreview } from '../types/quest-card-preview';
import { AppRoute } from '../const';

type TQuestCard = {
  questCard: TQuestCardPreview;
}

export default function QuestCard({ questCard }: TQuestCard) {
  return (
    <div className="quest-card">
      <Link to={`${AppRoute.QUEST_PAGE}/${questCard.id}`}>
        <div className="quest-card__img">
          <picture>
            <source type="image/webp" srcSet={`${questCard.previewImgWebp}, ${questCard.previewImgWebp} 2x`} />
            <img src={`${questCard.previewImg}`} srcSet={`${questCard.previewImg} 2x`} width={344} height={232} alt="Мужчина в клетке в подземелье." />
          </picture>
        </div>
        <div className="quest-card__content">
          <div className="quest-card__info-wrapper">
            <a className="quest-card__link" href="quest.html">{questCard.title}</a>
          </div>
          <ul className="tags quest-card__tags">
            <li className="tags__item">
              <svg width={11} height={14} aria-hidden="true">
                <use xlinkHref="#icon-person" />
              </svg>{questCard.peopleMinMax[0]}–{questCard.peopleMinMax[1]}&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width={14} height={14} aria-hidden="true">
                <use xlinkHref="#icon-level" />
              </svg>
              {questCard.level}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
