import { TQuestCardPreview } from '../types/quest-card-preview';
import { FilterOptions } from '../const';

export function filteredGenreQuests(initialQuests: TQuestCardPreview[], filter: string) {
  switch (filter) {
    case FilterOptions.ADVENTURES.id:
      return initialQuests.filter((quest) => quest.type === filter);
    case FilterOptions.HORRORS.id:
      return initialQuests.filter((quest) => quest.type === filter);
    case FilterOptions.MYSTICISM.id:
      return initialQuests.filter((quest) => quest.type === filter);
    case FilterOptions.Detective.id:
      return initialQuests.filter((quest) => quest.type === filter);
    case FilterOptions.SCI_FI.id:
      return initialQuests.filter((quest) => quest.type === filter);
    default:
      return initialQuests;
  }
}
