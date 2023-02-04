import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Auth screens
import Welcome from './pages/Welcome';
import LogIn from './pages/LogIn';
import SignUp_0 from './pages/SignUp/SignUp_0';
import SignUp_1 from './pages/SignUp/SignUp_1';
import SignUp_2 from './pages/SignUp/SignUp_2';

// Home Screens
import Accounts from './pages/Accounts'; //
import HistoryPage from './pages/History'; //
import Watchlist from './pages/Watchlist'; //
import CreateAccount from './pages/CreateAccount';
import EditWatchlist from './pages/EditWatchlist';
import Exchange from './pages/Exchange';

// Common modal screens
import Settings from './pages/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function WatchlistPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WatchlistScreen" component={Watchlist} />
      <Stack.Screen name="EditWatchlistScreen" component={EditWatchlist} />
      <Stack.Screen name="ExchangeScreen" component={Exchange} />
    </Stack.Navigator>
  );
}

function AccountsPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountsScreen" component={Accounts} />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccount} />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HistoryPage" component={HistoryPage} />
      <Tab.Screen name="AccountsPage" component={AccountsPage} />
      <Tab.Screen name="WatchlistPage" component={WatchlistPage} />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? (
          <Stack.Group>
            <Stack.Screen name="HomeScreen" component={Home} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="WelcomeScreen" component={Welcome} />
            <Stack.Screen name="LogInScreen" component={LogIn} />
            <Stack.Screen name="SignUp0Screen" component={SignUp_0} />
            <Stack.Screen name="SignUp1Screen" component={SignUp_1} />
            <Stack.Screen name="SignUp2Screen" component={SignUp_2} />
          </Stack.Group>
        )}
        <Stack.Group>
          <Stack.Screen name="SettingsScreen" component={Settings} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
