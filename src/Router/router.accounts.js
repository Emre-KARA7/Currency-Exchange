import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import pagesStyles from '../pages/pages.styles';
import {useSelector} from 'react-redux'; //redux
import Accounts from '../pages/Accounts';
import CreateAccount from '../pages/CreateAccount';
import {Colors} from '../assets/colors';

const Stack = createNativeStackNavigator();

function AccountsPage() {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountsScreen"
        component={Accounts}
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
                name="pluscircle"
                iconStyle={
                  darkTheme
                    ? pagesStyles.dark_iconBtnStyle
                    : pagesStyles.iconBtnStyle
                }
                onPress={() => navigation.navigate('CreateAccountScreen')}
              />
            </View>
          ),
          title: 'Accounts',
          headerStyle: {
            backgroundColor: darkTheme
              ? Colors.dark_background
              : Colors.background,
          },
          headerTitleStyle: {
            color: darkTheme ? Colors.dark_textPrimary : Colors.textPrimary,
          },
        })}
      />
      <Stack.Screen
        options={{
          title: 'Create Account',
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
        name="CreateAccountScreen"
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
}

export default AccountsPage;
