import ProjectStore from '@projectStore';
import UserStore from '@userStore';

import {SplashScreenStore} from '@components/splashScreen';

export default function createStore() {
  return {
    projectStore: new ProjectStore(),
    splashScreenStore: new SplashScreenStore(),
    userStore: new UserStore(),
  };
}
