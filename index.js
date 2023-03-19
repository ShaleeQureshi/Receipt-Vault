/**
 * @format
 */

import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
