import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/indexStore';
import { fetchFavorite, fetchQuestsCardPreview } from '../store/api-action';
import { favoriteSelectors } from '../store/slice/favorite/favorite';
import Container from '../components/container';
import { MainPageClass } from '../const';
import FavoriteCards from '../components/favorites-cards';

export default function FavoriteQuestPage() {
  const dispatch = useAppDispatch();
  const selectors = useAppSelector;

  const favorites = selectors(favoriteSelectors.favorites);

  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchQuestsCardPreview());
  }, [dispatch]);

  return (
    <Container mainClass={MainPageClass.MY_QUESTS}>
      <div>
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width={1366} height={1959} alt={''} />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          {favorites !== undefined && <FavoriteCards favoriteQuest={favorites} isFavorite />}
        </div>
      </div>
    </Container>
  );
}
