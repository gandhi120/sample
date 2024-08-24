import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './AppNavigator';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <AppNavigator />;
}

export default App;
