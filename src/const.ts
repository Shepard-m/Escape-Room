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
  DETECTIVE: {
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
    id: 'sci-fi',
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
  BOOKING_PAGE: '/booking',
  FAVORITE: '/favorite',
  CONTACTS: '/contacts',
  NOT_FOUND: '*',
};

export const ApiRoute = {
  QUESTS: 'quest',
  LOGIN: '/login',
  BOOKING: 'booking',
  FAVORITE: 'reservation',
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

export const DefaultValue = {
  TODAY: 'today',
  TOMORROW: 'tomorrow',
};

export const DataFormat = {
  HOUR: 'H',
  MINUTE: 'm'
};

export const IconPinMap = {
  DEFAULT: 'img/svg/pin-default.svg',

  ACTIVE: 'img/svg/pin-active.svg',
};

export const MapOptions = {
  CITY_LOCATION: {
    lat: 59.9386,
    lng: 30.3141,
    zoom: 10
  },
  WIDTH: '100%',
  HEIGHT: '100%'
};

export const DataLocationContactsPage = {
  location: {
    address: '',
    coords: [59.968322, 30.31735,]
  },
  slots: {
    today: [{
      time: '',
      isAvailable: false
    }],
    tomorrow: [{
      time: '',
      isAvailable: false
    }]
  },
  id: '1',
};

export const ListDataNamePage = {
  QUEST: 'quest',
  CONTACTS: 'contacts',
  FAVORITES: 'favorites',
};

export const LevelTranslate = {
  HARD: {
    rus: 'сложный',
    eng: 'hard'
  },
  MEDIUM: {
    rus: 'средний',
    eng: 'medium'
  },
  EASY: {
    rus: 'легкий',
    eng: 'easy'
  },
};
export const DataTranslate = {
  TODAY: {
    rus: 'сегодня',
    eng: 'today'
  },
  TOMORROW: {
    rus: 'завтра',
    eng: 'tomorrow'
  },
};

export const GenreTranslate = {
  HORROR: {
    rus: 'ужасы',
    eng: 'horror'
  },
  MYSTIC: {
    rus: 'мсистика',
    eng: 'mystic'
  },
  DETECTIVE: {
    rus: 'детектив',
    eng: 'detective'
  },
  ADVENTURES: {
    rus: 'приключение',
    eng: 'adventures'
  },
  SCI_FI: {
    rus: 'легкий',
    eng: 'easy'
  },
};

export const OptionValidation = {
  NAME: {
    max: 15,
    min: 1,
    pattern: /^[a-zA-Zа-яА-Я]{1,15}$/,
  },
  EMAIL: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  },
  PASSWORD: {
    max: 15,
    min: 3,
    pattern: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d).+$/
  },
  PHONE: {
    pattern: /^((\+7|7|8)+([0-9]){10})$/,
  },
};

export const TextErrors = {
  LOGIN: 'Произошла ошибка авторизация.',
  BOOKING: 'Произошла ошибка бронирования мероприятия.',
  LOGIN_EMAILS: 'Некорректная почта.',
  LOGIN_PASSWORD: `Некорректный пароль. Длина пароля ${OptionValidation.PASSWORD.min}-${OptionValidation.PASSWORD.max} символов.`,
  LOGIN_PASSWORD_TEXT: 'Пароль состоит минимум из одной буквы и цифры',
  LOGIN_PASSWORD_MIN: `Длина пароля должна быть больше ${OptionValidation.PASSWORD.min} символа`,
  LOGIN_PASSWORD_MAX: `Длина пароля должна быть меньше ${OptionValidation.PASSWORD.max} символа`,
  LOGOUT: 'Не удалось выйти из аккаунта',
  NAME: `Некорректное имя. Длина имени ${OptionValidation.NAME.min}-${OptionValidation.NAME.max} символов`,
  NAME_MIN: `Длина имени должна быть больше ${OptionValidation.NAME.min} символа`,
  NAME_MAX: `Длина имени должна быть меньше ${OptionValidation.NAME.max} символа`,
  PHONE: 'Некорректный телефон',
  PERSON: 'Некорректное количество участников',
  PERSON_MIN: 'Минимальное кол-во участников:',
  PERSON_MAX: 'Максимальное кол-во участников:',
  FAVORITE_DELETE: 'Не удалось удалить мероприятяие из избранного',
};
