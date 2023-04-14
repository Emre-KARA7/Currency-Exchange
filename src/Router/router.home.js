import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux'; //redux
import {Colors} from '../assets/colors';
import HistoryPage from '../pages/History';
import WatchlistPage from './router.watchlist'; //
import AccountsPage from './router.accounts';
import {useTranslation} from 'react-i18next'; //i18n
import HeaderRight from '../components/HeaderRight/HeaderRight';

const Tab = createBottomTabNavigator();

function Home() {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n
  const screens = [
    {
      name: 'HistoryPage',
      component: HistoryPage,
      options: ({navigation}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <HeaderRight navigation={navigation} iconName={'filter'} />
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
