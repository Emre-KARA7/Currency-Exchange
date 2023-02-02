import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './pages/Welcome';
import LogIn from './pages/LogIn';
import SignUp_0 from './pages/SignUp/SignUp_0';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="LogInScreen" component={LogIn} />
        <Stack.Screen name="SignUpScreen" component={SignUp_0} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
