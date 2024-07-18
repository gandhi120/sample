import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>{'hello'}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
