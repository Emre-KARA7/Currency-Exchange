import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import english from './english.json';
import turkish from './turkish.json';
import japanese from './japanese.json';

const localLang = {
  type: 'languageDetector',
  async: 'true',
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(localLang)
  .use(initReactI18next)
  .init({
    fallbackNS: 'common',
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: english,
      tr: turkish,
      ja: japanese,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
