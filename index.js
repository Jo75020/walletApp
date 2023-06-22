
import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import './global';
import { v4 as uuidv4 } from 'uuid';
global.uuidv4 = uuidv4;
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
