import React, {Component} from 'react';
import Modules from '@module';
import {create} from 'mobx-persist';
import createStore from './Stores';
import StoreManager from './storeManager';
import {mmkvStorage} from '@utils/storageUtils';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';

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
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
export default App;
