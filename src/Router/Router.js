import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import {Provider, useSelector} from 'react-redux'; //redux
import store from '../stores';
import {Colors} from '../assets/colors';
import pagesStyles from '../pages/pages.styles';
import InfoCard from '../components/InfoCard';
import NetInfo from '@react-native-community/netinfo';
import {useTranslation} from 'react-i18next'; //i18n
import SplashScreen from 'react-native-splash-screen';
// screens
import Welcome from '../pages/Welcome';
import LogIn from '../pages/LogIn';
import SignUp_0 from '../pages/SignUp/SignUp_0';
import SignUp_1 from '../pages/SignUp/SignUp_1';
import SignUp_2 from '../pages/SignUp/SignUp_2';
import Settings from '../pages/Settings';
import Home from './router.home';
const Stack = createNativeStackNavigator();

function Router() {
  const {auth} = useSelector(state => state.auth);
  const darkTheme = useSelector(state => state.darkTheme.darkTheme); //redux
  const {t, i18n} = useTranslation(); //i18n
  const [netConnection, setNetConnection] = useState(true);

  const unsubscribe = NetInfo.addEventListener(state => {
    if (netConnection !== state.isConnected)
      setNetConnection(state.isConnected);
  });

  if (netConnection === false) {
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
  }
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
                    style={
                      darkTheme
                        ? pagesStyles.dark_iconBtnOuterStyle
                        : pagesStyles.iconBtnOuterStyle
                    }
                    name="setting"
                    iconStyle={
                      darkTheme
                        ? pagesStyles.dark_iconBtnStyle
                        : pagesStyles.iconBtnStyle
                    }
                    onPress={() => navigation.navigate('SettingsScreen')}
                  />
                ),
                title: t('welcome', {ns: 'router'}),
                headerStyle: {
                  backgroundColor: darkTheme
                    ? Colors.dark_background
                    : Colors.background,
                },
                headerTitleStyle: {
                  color: darkTheme
                    ? Colors.dark_textPrimary
                    : Colors.textPrimary,
                },
              })}
              name="WelcomeScreen"
              component={Welcome}
            />
            <Stack.Screen
              options={{
                title: t('login', {ns: 'router'}),
                headerTintColor: Colors.textSecondary,
                headerStyle: {
                  backgroundColor: darkTheme
                    ? Colors.dark_background
                    : Colors.background,
                },
                headerTitleStyle: {
                  color: darkTheme
                    ? Colors.dark_textPrimary
                    : Colors.textPrimary,
                },
              }}
              name="LogInScreen"
              component={LogIn}
            />
            <Stack.Screen
              options={{
                title: t('signup', {ns: 'router'}),
                headerTintColor: Colors.textSecondary,
                headerStyle: {
                  backgroundColor: darkTheme
                    ? Colors.dark_background
                    : Colors.background,
                },
                headerTitleStyle: {
                  color: darkTheme
                    ? Colors.dark_textPrimary
                    : Colors.textPrimary,
                },
              }}
              name="SignUp0Screen"
              component={SignUp_0}
            />
            <Stack.Screen
              options={{
                title: t('signup', {ns: 'router'}),
                headerTintColor: Colors.textSecondary,
                headerStyle: {
                  backgroundColor: darkTheme
                    ? Colors.dark_background
                    : Colors.background,
                },
                headerTitleStyle: {
                  color: darkTheme
                    ? Colors.dark_textPrimary
                    : Colors.textPrimary,
                },
              }}
              name="SignUp1Screen"
              component={SignUp_1}
            />
            <Stack.Screen
              options={{
                title: t('signup', {ns: 'router'}),
                headerTintColor: Colors.textSecondary,
                headerStyle: {
                  backgroundColor: darkTheme
                    ? Colors.dark_background
                    : Colors.background,
                },
                headerTitleStyle: {
                  color: darkTheme
                    ? Colors.dark_textPrimary
                    : Colors.textPrimary,
                },
              }}
              name="SignUp2Screen"
              component={SignUp_2}
            />
          </Stack.Group>
        )}
        <Stack.Group>
          <Stack.Screen
            options={{
              title: t('settings', {ns: 'router'}),
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
            name="SettingsScreen"
            component={Settings}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RouterWrapper() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default RouterWrapper;
