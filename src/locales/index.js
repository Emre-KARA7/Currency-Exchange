import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import english from './english.json';
import turkish from './turkish.json';

const localLang = {
  type: 'languageDetector',
  async: 'true',
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
console.log(RNLocalize.getLocales()[0].languageCode);
i18next
  .use(localLang)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: english,
      tr: turkish,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
