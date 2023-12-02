import React, {Component} from 'react';
import Modules from '@module';
import {create} from 'mobx-persist';
import createStore from './Stores';
import StoreManager from './storeManager';
import {mmkvStorage} from '@utils/storageUtils';
import {Text, View} from 'react-native';
export const storeManager = new StoreManager(createStore());
const hydrate = create({
  storage: mmkvStorage,
  jsonify: false,
});
Modules.forEach(module => module({storeManager, options: {hydrate}}));
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>ello</Text>
      </View>
    );
  }
}
export default App;
