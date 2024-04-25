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
    id: 'adventures',
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
    id: 'sci-Fi',
    size: {
      with: '28',
      height: '30',
    }
  },
};

export const FilterLevelOption = {
  ANY: {
    name: 'Любой',
    id: 'any',
  },
  easy: {
    name: 'Лёгкий',
    id: 'easy',
  },
  middle: {
    name: 'Средний',
    id: 'medium',
  },
  hard: {
    name: 'Сложный',
    id: 'hard',
  },
};

export const AppRoute = {
  INDEX_PAGE: '/',
  QUEST_PAGE: '/quest',
  LOGIN_PAGE: '/login',
};

export const ApiRoute = {
  QUESTS: 'quest',
};

export const RequestStatus = {
  SUCCESS: 'success',
  LOADING: 'loading',
  FAILED: 'failed',
  NONE: 'none'
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UN_KNOWN: 'UNKNOWN',
};

export const ErrorMessage = {
  EMAIL: 'an incorrect email has been entered',
  password: 'an incorrect password has been entered',
};

export const DefaultValue = {
  TODAY: 'today',
  TOMORROW: 'tomorrow',
};

export const DataFormat = {
  HOUR: 'H',
  MINUTE: 'm'
};
