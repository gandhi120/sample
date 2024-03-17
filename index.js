/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {myStore, persister} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const Root = () => {
  return (
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
