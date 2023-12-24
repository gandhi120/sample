import React, {Component} from 'react';
import Modules from '@module';
import createStore from './Stores';
import StoreManager from './storeManager';
import {mmkvStorage} from '@utils/storageUtils';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'mobx-react';
import {create} from 'mobx-persist';

export const storeManager = new StoreManager(createStore());
export const navigationRef = React.createRef();

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

  componentDidMount() {
    console.log('propsApp', this.props);

    // const {splashScreenStore} = storeManager.store;
    // setTimeout(() => {
    //   splashScreenStore.hideSplashScreen();
    // }, 5000);
  }
  handleNavigationRef = ref => {
    console.log('handleNavigationRef');
    // DON'T DO navigationRef = ref, cause this will give you "navigationRef is
    // read only" error.
    navigationRef.current = ref;
  };

  render() {
    console.log('propsApp', this.props);
    return (
      <SafeAreaView style={styles.safeArea}>
        <NativeBaseProvider>
          <Provider {...storeManager.store}>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer ref={this.handleNavigationRef}>
              <DrawerNavigator />
            </NavigationContainer>
          </Provider>
        </NativeBaseProvider>
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
