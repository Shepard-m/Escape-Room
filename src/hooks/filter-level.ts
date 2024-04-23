import { TQuestCardPreview } from '../types/quest-card-preview';
import { FilterLevelOption } from '../const';

export function filteredLevelQuests(initialQuests: TQuestCardPreview[], filter: string) {
  switch (filter) {
    case FilterLevelOption.easy.id:
      return initialQuests.filter((quest) => quest.level === filter);
    case FilterLevelOption.middle.id:
      return initialQuests.filter((quest) => quest.level === filter);
    case FilterLevelOption.hard.id:
      return initialQuests.filter((quest) => quest.level === filter);
    default:
      return initialQuests;
  }
}
