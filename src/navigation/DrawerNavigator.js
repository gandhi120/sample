import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import MyRewardStackNavigator from './stack-navigators/MyRewardStackNavigator';
import LocationStackNavigator from './stack-navigators/LocationStackNavigator';

const Drawer = createDrawerNavigator();

class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
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
