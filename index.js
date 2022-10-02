/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Wrapper from './src/Wrapper';
import {name as appName} from './app.json';
// import Router from './src/Router';

AppRegistry.registerComponent(appName, () => Wrapper);
