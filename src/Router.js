import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './pages/Welcome';
import LogIn from './pages/LogIn';
import SignUp_0 from './pages/SignUp/SignUp_0';
import SignUp_1 from './pages/SignUp/SignUp_1';
import SignUp_2 from './pages/SignUp/SignUp_2';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="LogInScreen" component={LogIn} />
        <Stack.Screen name="SignUp0Screen" component={SignUp_0} />
        <Stack.Screen name="SignUp1Screen" component={SignUp_1} />
        <Stack.Screen name="SignUp2Screen" component={SignUp_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
