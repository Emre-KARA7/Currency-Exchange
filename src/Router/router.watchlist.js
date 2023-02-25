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

const Stack = createNativeStackNavigator();

function WatchlistPage() {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t, i18n} = useTranslation(); //i18n
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <View style={pagesStyles.flexRowCenter}>
              <Icon.Button
                style={pagesStyles.iconBtnOuterStyle}
                name="setting"
                iconStyle={
                  darkTheme
                    ? pagesStyles.dark_iconBtnStyle
                    : pagesStyles.iconBtnStyle
                }
                onPress={() => navigation.navigate('SettingsScreen')}
              />
              <Icon.Button
                style={pagesStyles.iconBtnOuterStyle}
                name="edit"
                iconStyle={
                  darkTheme
                    ? pagesStyles.dark_iconBtnStyle
                    : pagesStyles.iconBtnStyle
                }
                onPress={() => navigation.navigate('EditWatchlistScreen')}
              />
            </View>
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
        })}
        name="WatchlistScreen"
        component={Watchlist}
      />
      <Stack.Screen
        options={{
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
        }}
        name="EditWatchlistScreen"
        component={EditWatchlist}
      />
      <Stack.Screen
        options={{
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
        }}
        name="ExchangeScreen"
        component={Exchange}
      />
    </Stack.Navigator>
  );
}

export default WatchlistPage;
