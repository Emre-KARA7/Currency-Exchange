/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/Router/Router';
import {name as appName} from './app.json';
import Test from './src/Test';
import i18next from './src/locales';

AppRegistry.registerComponent(appName, () => Router); //Router
