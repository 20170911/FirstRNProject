/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './app/App';
import {name as appName} from './app.json';
import Test from "./app/Test";

AppRegistry.registerComponent(appName, () => Test);
