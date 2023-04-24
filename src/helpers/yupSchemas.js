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

  const SignUp0Schema = Yup.object().shape({
    tckn: Yup.string()
      .min(11, t('yup01', {ns: 'common'}))
      .max(11, t('yup02', {ns: 'common'}))
      .matches(/^\d+$/, t('yup04', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    name: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    surname: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    b_date: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
  });

  const SignUp2Schema = Yup.object().shape({
    tel: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        t('yup05', {ns: 'common'}),
      )
      .min(10, t('yup01', {ns: 'common'}))
      .max(10, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    pass1: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
    pass2: Yup.string()
      .min(2, t('yup01', {ns: 'common'}))
      .max(50, t('yup02', {ns: 'common'}))
      .required(t('yup03', {ns: 'common'})),
  });

  switch (schemaName) {
    case 'LoginSchema':
      return LoginSchema;
    case 'SignUp0Schema':
      return SignUp0Schema;
    case 'SignUp2Schema':
      return SignUp2Schema;
  }
}
