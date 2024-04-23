export const MainPageClass = {
  INDEX: 'page-content',
  CONTACTS: 'page-content decorated-page',
  BOOKING: 'page-content decorated-page',
  LOGIN: 'decorated-page login',
  MY_QUESTS: 'page-content decorated-page',
  QUEST: 'decorated-page quest-page',
};

export const FilterOptions = {
  ALL: {
    name: 'Все квесты',
    iconName: 'all-quests',
    id: 'all',
    size: {
      with: '26',
      height: '30',
    }
  },
  ADVENTURES: {
    name: 'Приключения',
    iconName: 'adventure',
    id: 'adventure',
    size: {
      with: '36',
      height: '30',
    }
  },
  HORRORS: {
    name: 'Ужасы',
    iconName: 'horror',
    id: 'horror',
    size: {
      with: '30',
      height: '30',
    }
  },
  MYSTICISM: {
    name: 'Мистика',
    iconName: 'mystic',
    id: 'mystic',
    size: {
      with: '30',
      height: '30',
    }
  },
  Detective: {
    name: 'Детектив',
    iconName: 'detective',
    id: 'detective',
    size: {
      with: '40',
      height: '30',
    }
  },
  SCI_FI: {
    name: 'Sci-fi',
    iconName: 'sci-fi',
    id: 'sciFi',
    size: {
      with: '28',
      height: '30',
    }
  },
};

export const SortOption = {
  ANY: {
    name: 'Любой',
    id: 'any',
  },
  easy: {
    name: 'Лёгкий',
    id: 'any',
  },
  middle: {
    name: 'Средний',
    id: 'middle',
  },
  hard: {
    name: 'Сложный',
    id: 'hard',
  },
};

export const ApiRoute = {
  INDEX_PAGE: '/',
};

export const RequestStatus = {
  SUCCESS: 'success',
  LOADING: 'loading',
  FAILED: 'failed',
  NONE: 'none'
};
