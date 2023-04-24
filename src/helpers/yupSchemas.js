import * as Yup from 'yup';
import {useTranslation} from 'react-i18next'; //i18n

export function yup(schemaName) {
  const {t} = useTranslation(); //i18n
  const LoginSchema = Yup.object().shape({
    tckn: Yup.string()
      .min(11, t('yup01', {ns: 'common'}))
      .max(11, t('yup02', {ns: 'common'}))
      .matches(/^\d+$/, t('yup04', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    pass: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
  });
  if (schemaName === 'LoginSchema') {
    return LoginSchema;
  }
}
