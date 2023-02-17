/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/Router';
import {name as appName} from './app.json';
import i18next from './src/locales';
AppRegistry.registerComponent(appName, () => Router);
