import * as locale from './';

export const getCurrentLocale = currentLocale => {
  switch (currentLocale) {
    case 'ko':
      return locale.ko;
    case 'en':
      return locale.en;
    default:
      return locale.en;
  }
};
