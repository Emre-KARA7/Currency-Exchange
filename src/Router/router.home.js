import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux'; //redux
import {Colors} from '../assets/colors';
import pagesStyles from '../pages/pages.styles';
import HistoryPage from '../pages/History';
import WatchlistPage from './router.watchlist'; //
import AccountsPage from './router.accounts';
import {useTranslation} from 'react-i18next'; //i18n

const Tab = createBottomTabNavigator();

function Home() {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t, i18n} = useTranslation(); //i18n
  const screens = [
    {
      name: 'HistoryPage',
      component: HistoryPage,
      options: ({navigation}) => ({
        headerRight: () => (
          <View style={pagesStyles.flexRowCenter}>
            <Icon.Button
              style={
                darkTheme
                  ? pagesStyles.dark_iconBtnOuterStyle
                  : pagesStyles.iconBtnOuterStyle
              }
              name="setting"
              iconStyle={
                darkTheme
                  ? pagesStyles.dark_iconBtnStyle
                  : pagesStyles.iconBtnStyle
              }
              onPress={() => navigation.navigate('SettingsScreen')}
            />
            <Icon.Button
              style={
                darkTheme
                  ? pagesStyles.dark_iconBtnOuterStyle
                  : pagesStyles.iconBtnOuterStyle
              }
              name="filter"
              iconStyle={
                darkTheme
                  ? pagesStyles.dark_iconBtnStyle
                  : pagesStyles.iconBtnStyle
              }
            />
          </View>
        ),
        title: t('history', {ns: 'router'}),
        headerStyle: {
          backgroundColor: darkTheme
            ? Colors.dark_background
            : Colors.background,
        },
        headerTitleStyle: {
          color: darkTheme ? Colors.dark_textPrimary : Colors.textPrimary,
        },
      }),
    },
    {
      name: 'AccountsPage',
      component: AccountsPage,
      options: {headerShown: false, title: t('accounts', {ns: 'router'})},
    },
    {
      name: 'WatchlistPage',
      component: WatchlistPage,
      options: {headerShown: false, title: t('watchlist', {ns: 'router'})},
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: darkTheme
            ? Colors.dark_background
            : Colors.background,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HistoryPage') {
            iconName = 'clockcircleo';
          } else if (route.name === 'AccountsPage') {
            iconName = 'wallet';
          } else if (route.name === 'WatchlistPage') {
            iconName = 'linechart';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: 'gray',
      })}>
      {screens.map(e => (
        <Tab.Screen name={e.name} component={e.component} options={e.options} />
      ))}
    </Tab.Navigator>
  );
}

export default Home;
