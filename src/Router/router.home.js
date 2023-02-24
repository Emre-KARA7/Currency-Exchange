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

const Tab = createBottomTabNavigator();

function Home() {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
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
      <Tab.Screen
        options={({navigation}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <View style={pagesStyles.flexRowCenter}>
              <Icon.Button
                style={pagesStyles.iconBtnOuterStyle}
                name="setting"
                iconStyle={pagesStyles.iconBtnStyle}
                onPress={() => navigation.navigate('SettingsScreen')}
              />
              <Icon.Button
                style={pagesStyles.iconBtnOuterStyle}
                name="filter"
                iconStyle={pagesStyles.iconBtnStyle}
              />
            </View>
          ),
          title: 'History',
        })}
        name="HistoryPage"
        component={HistoryPage}
      />
      <Tab.Screen
        name="AccountsPage"
        component={AccountsPage}
        options={{headerShown: false, title: 'Accounts'}}
      />
      <Tab.Screen
        name="WatchlistPage"
        component={WatchlistPage}
        options={{headerShown: false, title: 'watchlist'}}
      />
    </Tab.Navigator>
  );
}

export default Home;
