import { TQuestCardPreview } from '../types/quest-card-preview';
import QuestCard from './quest-card';

type TQuestCards = {
  questCards: TQuestCardPreview[];
  isFavorite?: boolean;
}

export default function QuestCards({ questCards, isFavorite }: TQuestCards) {
  return (
    <div className="cards-grid">
      {questCards?.map((card) => <QuestCard key={card.id} questCard={card} isFavorite={isFavorite} />)}
    </div>
  );
}
