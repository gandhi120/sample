import React, {Component} from 'react';
import MyRewardStackNavigator from './stack-navigators/MyRewardStackNavigator';
import LocationStackNavigator from './stack-navigators/LocationStackNavigator';
import BottomTabNavigators from './BottomTabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component={BottomTabNavigators} />
        <Drawer.Screen
          name="MyRewardsStack"
          component={MyRewardStackNavigator}
        />
        <Drawer.Screen
          name="LocationsStack"
          component={LocationStackNavigator}
        />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigator;
