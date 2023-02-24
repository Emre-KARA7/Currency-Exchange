import React, {useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {Provider, useSelector} from 'react-redux'; //redux
import store from './stores';
import {Colors} from './assets/colors';
import pagesStyles from './pages/pages.styles';
import InfoCard from './components/InfoCard';
import NetInfo from '@react-native-community/netinfo';
// Auth screens
import Welcome from './pages/Welcome';
import LogIn from './pages/LogIn';
import SignUp_0 from './pages/SignUp/SignUp_0';
import SignUp_1 from './pages/SignUp/SignUp_1';
import SignUp_2 from './pages/SignUp/SignUp_2';
// Home Screens
import Accounts from './pages/Accounts';
import HistoryPage from './pages/History';
import Watchlist from './pages/Watchlist';
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
        })}
        name="WatchlistScreen"
        component={Watchlist}
      />
      <Stack.Screen name="EditWatchlistScreen" component={EditWatchlist} />
      <Stack.Screen name="ExchangeScreen" component={Exchange} />
    </Stack.Navigator>
  );
}

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
        })}
      />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccount} />
    </Stack.Navigator>
  );
}

function Home() {
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
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
        })}
        name="HistoryPage"
        component={HistoryPage}
      />
      <Tab.Screen
        name="AccountsPage"
        component={AccountsPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="WatchlistPage"
        component={WatchlistPage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function Router() {
  const {auth} = useSelector(state => state.auth);
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const [netConnection, setNetConnection] = useState(true);

  const unsubscribe = NetInfo.addEventListener(state => {
    if (netConnection !== state.isConnected)
      setNetConnection(state.isConnected);
  });
  ////////////////////////////////////////////////////////////
  ////
  if (netConnection === false)
    return (
      <InfoCard
        infoType={'WARNING'}
        infoHeader={'No Connection'}
        btnText={'Tamam'}
        infoText={
          'inernent baglantisi bulunamadi, bir aga bagli oldugunuzdan emin olunca tekrar deneyin'
        }
        onBtnPress={() => {}}
      />
    );
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: darkTheme
              ? Colors.dark_background
              : Colors.background,
          },
        }}>
        {auth ? ( //auth
          <Stack.Group>
            <Stack.Screen
              name="HomeScreen"
              component={Home}
              options={{headerShown: false}}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              options={({navigation}) => ({
                // eslint-disable-next-line react/no-unstable-nested-components
                headerRight: () => (
                  <Icon.Button
                    style={pagesStyles.iconBtnOuterStyle}
                    name="setting"
                    iconStyle={pagesStyles.iconBtnStyle}
                    onPress={() => navigation.navigate('SettingsScreen')}
                  />
                ),
              })}
              name="WelcomeScreen"
              component={Welcome}
            />
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

function RouterWrapper() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default RouterWrapper;
