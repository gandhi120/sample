import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Animated from 'react-native-reanimated';
import {navigationRef} from '@src/App';

const BottomTabs = props => {
  const [screen, setScreen] = useState('');

  useEffect(() => same());
  const same = () => {
    let currentScreen = '';
    try {
      const route = navigationRef.current?.getCurrentRoute(); //current route object
      console.log('route.name', route.name);
      currentScreen = route.name;
      setScreen(currentScreen);
      console.log('currentScreen', currentScreen);
    } catch (error) {
      // console.log('error', error);
    }
  };

  return (
    <Animated.View
      style={[
        styles.tabBarContainer,
        {display: screen === 'Profile' ? 'none' : 'flex'},
      ]}>
      <View style={styles.rootContainer}>
        <Text>ACCOUNT</Text>
      </View>
    </Animated.View>
  );
};

export default BottomTabs;
