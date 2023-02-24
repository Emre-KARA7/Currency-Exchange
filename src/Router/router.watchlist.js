import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import pagesStyles from '../pages/pages.styles';
import Watchlist from '../pages/Watchlist';
import EditWatchlist from '../pages/EditWatchlist';
import Exchange from '../pages/Exchange';

const Stack = createNativeStackNavigator();

function WatchlistPage() {
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
                iconStyle={pagesStyles.iconBtnStyle}
                onPress={() => navigation.navigate('SettingsScreen')}
              />
              <Icon.Button
                style={pagesStyles.iconBtnOuterStyle}
                name="edit"
                iconStyle={pagesStyles.iconBtnStyle}
                onPress={() => navigation.navigate('EditWatchlistScreen')}
              />
            </View>
          ),
          title: 'Watchlist',
        })}
        name="WatchlistScreen"
        component={Watchlist}
      />
      <Stack.Screen
        options={{title: 'Edit Watchlist'}}
        name="EditWatchlistScreen"
        component={EditWatchlist}
      />
      <Stack.Screen
        options={{title: 'Exchange'}}
        name="ExchangeScreen"
        component={Exchange}
      />
    </Stack.Navigator>
  );
}

export default WatchlistPage;
