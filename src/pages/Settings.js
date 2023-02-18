import React from 'react';
import {SafeAreaView, View, Switch, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../stores/darkTheme';
import {useTranslation} from 'react-i18next'; //i18n
import pagesStyles from './pages.styles';
import Dropdown from '../components/Dropdown';
import {Colors} from '../assets/colors';

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
    <SafeAreaView
      style={
        darkTheme
          ? pagesStyles.flexOnePaddingBG_dark
          : pagesStyles.flexOnePaddingBG
      }>
      <Text>{t('text01')}</Text>
      <View style={pagesStyles.flexRowBetween}>
        <Text style={darkTheme ? pagesStyles.textB_dark : pagesStyles.textB}>
          Dark Mode{' '}
        </Text>
        <Switch
          trackColor={{
            false: Colors.mainLighter,
            true: Colors.secondaryLighter,
          }}
          thumbColor={darkTheme ? Colors.secondary : Colors.main}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={darkTheme}
        />
      </View>

      <Dropdown
        setSelected={val => i18n.changeLanguage(val)}
        data={langList}
        save={'key'}
        pleaceholder={'Language'}
      />
    </SafeAreaView>
  );
}

export default Settings;
