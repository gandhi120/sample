import {observable, action} from 'mobx';
import SplashScreen from 'react-native-splash-screen';

export default class SplashScreenStore {
  @observable isVisible = true;

  constructor(authHide = true, timeout = 2000) {
    const self = this;
    if (authHide && SplashScreen) {
      setTimeout(() => {
        self.hideSplashScreen();
      }, timeout);
    }
  }

  @action
  hideSplashScreen() {
    SplashScreen.hide();
    this.isVisible = false;
  }
}
