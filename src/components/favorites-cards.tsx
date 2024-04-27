import { TFavorite } from '../types/favorite';
import QuestCard from './quest-card';

type TQuestCards = {
  favoriteQuest: TFavorite[];
  isFavorite?: boolean;
}

export default function FavoriteCards({ favoriteQuest, isFavorite }: TQuestCards) {
  return (
    <div className="cards-grid">
      {favoriteQuest?.map((card) =>
        <QuestCard key={card.quest.id} questCard={card.quest} isFavorite={isFavorite} peopleCount={card.peopleCount} date={card.date} time={card.time} location={card.location.address} id={card.id} />)}
    </div>
  );
}
