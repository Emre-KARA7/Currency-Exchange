import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux'; //redux
import Accounts from '../pages/Accounts';
import CreateAccount from '../pages/CreateAccount';
import {Colors} from '../assets/colors';
import {useTranslation} from 'react-i18next'; //i18n
import HeaderRight from '../components/HeaderRight/HeaderRight';
const Stack = createNativeStackNavigator();

function AccountsPage() {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t} = useTranslation(); //i18n

  const screens = [
    {
      name: 'AccountsScreen',
      component: Accounts,
      options: ({navigation}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <HeaderRight
            navigation={navigation}
            iconName={'pluscircle'}
            navigateScreenName={'CreateAccountScreen'}
          />
        ),

        title: t('accounts', {ns: 'router'}),
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
      name: 'CreateAccountScreen',
      component: CreateAccount,
      options: {
        title: t('create-account', {ns: 'router'}),
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

export default AccountsPage;
