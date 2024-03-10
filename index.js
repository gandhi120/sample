/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {myStore} from './src/redux/store/store';

const Root = () => {
  return (
    <Provider store={myStore}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
