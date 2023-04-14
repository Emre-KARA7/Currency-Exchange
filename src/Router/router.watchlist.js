import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import pagesStyles from '../pages/pages.styles';
import Watchlist from '../pages/Watchlist';
import EditWatchlist from '../pages/EditWatchlist';
import Exchange from '../pages/Exchange';
import {useSelector} from 'react-redux'; //redux
import {useTranslation} from 'react-i18next'; //i18n
import {Colors} from '../assets/colors';
import HeaderRight from '../components/HeaderRight/HeaderRight';

const Stack = createNativeStackNavigator();

function WatchlistPage() {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t, i18n} = useTranslation(); //i18n

  const screens = [
    {
      name: 'WatchlistScreen',
      component: Watchlist,
      options: ({navigation}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <HeaderRight
            navigation={navigation}
            iconName={'edit'}
            navigateScreenName={'EditWatchlistScreen'}
          />
        ),
        title: t('watchlist', {ns: 'router'}),
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
      name: 'EditWatchlistScreen',
      component: EditWatchlist,
      options: {
        title: t('edit-watchlist', {ns: 'router'}),
        headerTintColor: Colors.textSecondary,
        headerStyle: {
          backgroundColor: darkTheme
            ? Colors.dark_background
            : Colors.background,
        },
        headerTitleStyle: {
          color: darkTheme ? Colors.dark_textPrimary : Colors.textPrimary,
        },
      },
    },
    {
      name: 'ExchangeScreen',
      component: Exchange,
      options: {
        title: t('exchange', {ns: 'router'}),
        headerTintColor: Colors.textSecondary,
        headerStyle: {
          backgroundColor: darkTheme
            ? Colors.dark_background
            : Colors.background,
        },
        headerTitleStyle: {
          color: darkTheme ? Colors.dark_textPrimary : Colors.textPrimary,
        },
      },
    },
  ];
  return (
    <Stack.Navigator>
      {screens.map(e => (
        <Stack.Screen
          name={e.name}
          component={e.component}
          options={e.options}
        />
      ))}
    </Stack.Navigator>
  );
}

export default WatchlistPage;
