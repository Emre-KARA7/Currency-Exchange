import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import pagesStyles from '../pages/pages.styles';
import Accounts from '../pages/Accounts';
import CreateAccount from '../pages/CreateAccount';

const Stack = createNativeStackNavigator();

function AccountsPage() {
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
                iconStyle={pagesStyles.iconBtnStyle}
                onPress={() => navigation.navigate('SettingsScreen')}
              />
              <Icon.Button
                style={pagesStyles.iconBtnOuterStyle}
                name="pluscircle"
                iconStyle={pagesStyles.iconBtnStyle}
                onPress={() => navigation.navigate('CreateAccountScreen')}
              />
            </View>
          ),
          title: 'Accounts',
        })}
      />
      <Stack.Screen
        options={{title: 'Create Account'}}
        name="CreateAccountScreen"
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
}

export default AccountsPage;
