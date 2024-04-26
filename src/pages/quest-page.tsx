import Container from '../components/container';
import { Link, useParams } from 'react-router-dom';
import { AppRoute, MainPageClass } from '../const';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/indexStore';
import { fetchQuest } from '../store/api-action';
import { questSelectors } from '../store/slice/quest/quest';

export default function QuestPage() {
  const dispatch = useAppDispatch();
  const selectors = useAppSelector;
  const { questId } = useParams();
  useEffect(() => {
    dispatch(fetchQuest(questId as string));
  }, [dispatch]);
  const quest = selectors(questSelectors.currentQuest);

  if (quest === undefined) {
    return;
  }

  return (
    <Container mainClass={MainPageClass.QUEST}>
      <div>
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${quest.coverImgWebp}, ${quest.coverImgWebp} 2x`} />
            <img src={`${quest.coverImg}`} srcSet={`${quest.coverImg} 2x`} width={1366} height={768} alt={''} />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{quest.title}</h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>
              {quest.type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>3–6&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {quest.level}
              </li>
            </ul>
            <p className="quest-page__description">{quest.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={`${AppRoute.BOOKING_PAGE}/${questId as string}`}>
              Забронировать
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
