import ProjectStore from '@projectStore';
import {SplashScreenStore} from '@components/splashScreen';

export default function createStore() {
  return {
    projectStore: new ProjectStore(),
    splashScreenStore: new SplashScreenStore(),
  };
}
