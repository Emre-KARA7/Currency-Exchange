import React from 'react';
import {SafeAreaView, Switch, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../stores/darkTheme';
import {SelectList} from 'react-native-dropdown-select-list';
import {useTranslation} from 'react-i18next'; //i18n

import InfoCard from '../components/InfoCard';

function Settings() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(state => state.darkTheme.darkTheme);
  const toggleSwitch = () => dispatch(changeTheme(!darkTheme));
  const {t, i18n} = useTranslation(); //i18n

  const langList = [
    {key: 'en', value: 'English'},
    {key: 'tr', value: 'Türkçe'},
  ];
  return (
    <InfoCard infoHeader={'LOADING..'} infoType={'LOADING'} btnText={'Tamam'} />
    // <SafeAreaView>
    //   <Text>{t('text01')}</Text>
    //   <Switch
    //     trackColor={{false: '#767577', true: '#81b0ff'}}
    //     thumbColor={darkTheme ? '#f5dd4b' : '#f4f3f4'}
    //     ios_backgroundColor="#3e3e3e"
    //     onValueChange={toggleSwitch}
    //     value={darkTheme}
    //   />
    //   <SelectList
    //     setSelected={val => i18n.changeLanguage(val)}
    //     data={langList}
    //     save="key"
    //   />
    // </SafeAreaView>
  );
}

export default Settings;
