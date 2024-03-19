import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Animated from 'react-native-reanimated';
import {navigationRef} from '@src/App';
import ActionButton from '@actionButton';
import {routing} from '@utils/routeConstant';
import {includes} from 'lodash';

const BottomTabs = props => {
  const [screen, setScreen] = useState('');

  useEffect(() => same());

  const same = () => {
    let currentScreen = '';
    try {
      const route = navigationRef.current?.getCurrentRoute(); //current route object
      currentScreen = route.name;
      setScreen(currentScreen);
    } catch (error) {
      // console.log('error', error);
    }
  };

  const onLike = () => {
    const {navigation} = props.route;
    navigation.jumpTo(routing.LIKE_TAB, {});
  };

  const onHome = () => {
    const {navigation} = props.route;
    navigation.jumpTo(routing.HOME_TAB, {});
  };

  console.log('screen', screen);
  return (
    <Animated.View
      style={[
        styles.tabBarContainer,
        {
          display: includes(['SingleProduct', 'Profile', 'Address'], screen)
            ? 'none'
            : 'flex',
        },
      ]}>
      <View style={styles.rootContainer}>
        <ActionButton
          buttonStyle={
            screen === 'Home'
              ? styles.activeHomeButtonContainer
              : styles.homeButtonContainer
          }
          icon="home"
          iconType="sample"
          iconStyle={styles.homeIcon}
          onPress={() => onHome()}
        />
        <ActionButton
          buttonStyle={
            screen === 'Like'
              ? styles.activeHomeButtonContainer
              : styles.homeButtonContainer
          }
          ic
          icon="like"
          iconType="sample"
          iconStyle={styles.homeIcon}
          onPress={() => onLike()}
        />
      </View>
    </Animated.View>
  );
};

export default BottomTabs;
