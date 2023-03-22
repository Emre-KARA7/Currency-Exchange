import React, {useEffect} from 'react';
import {SafeAreaView, View, Switch, Text} from 'react-native';
import {changeTheme} from '../stores/darkTheme';
import {useTranslation} from 'react-i18next'; //i18n
import pagesStyles from './pages.styles';
import Dropdown from '../components/Dropdown';
import {Colors} from '../assets/colors';
import useStorage from '../hooks/useStorage';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import auth, {changeAuthState} from '../stores/auth';

function Settings({navigation}) {
  //
  const {StorageLoading, StorageError, storageSet} = useStorage();
  const {auth} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation(); //i18n
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //get theme

  const toggleSwitch = async () => {
    await storageSet('theme', !darkTheme);
    dispatch(changeTheme(!darkTheme)); //set theme
  };
  const setLang = val => {
    i18n.changeLanguage(val); //set lan
    storageSet('lang', i18n.language);
  };
  const langList = [
    {key: 'en', value: 'English'},
    {key: 'tr', value: 'Türkçe'},
    {key: 'ja', value: '日本'},
  ];

  if (StorageLoading) return <InfoCard />;
  else if (StorageError) {
    return (
      <InfoCard
        onBtnPress={() => {
          navigation.popToTop;
        }}
        btnText={t('btn02', {ns: 'common'})}
        infoType={'ERROR'}
        infoHeader={t('infoHeader', {ns: 'settings'})}
        infoText={t('infoText', {ns: 'settings'})}
      />
    );
  }
  //
  // <Text>{t('text02', {ns: 'app'})}</Text> //key - nanmespace
  return (
    <SafeAreaView
      style={
        darkTheme
          ? pagesStyles.flexOnePaddingBG_dark
          : pagesStyles.flexOnePaddingBG
      }>
      <View style={pagesStyles.flexRowBetween}>
        <Text style={darkTheme ? pagesStyles.textB_dark : pagesStyles.textB}>
          {t('darkMode', {ns: 'settings'})}
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
        setSelected={val => setLang(val)}
        data={langList}
        save={'key'}
        pleaceholder={'Language'}
      />
      {auth ? (
        <Button
          text={'Safe Logout'}
          colorsetNo={10}
          onPress={() => {
            /*
          other 
          logout
          functions
          */
            dispatch(changeAuthState(false));
            navigation.popToTop();
          }}
        />
      ) : null}
    </SafeAreaView>
  );
}

export default Settings;
