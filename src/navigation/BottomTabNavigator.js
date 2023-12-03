import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import BookStackNavigator from './stack-navigators/BookStackNavigator';
import ContactStackNavigator from './stack-navigators/ContactStackNavigator';

const Tab = createBottomTabNavigator();

class BottomTabNavigators extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
        <Tab.Screen name="BookStack" component={BookStackNavigator} />
        <Tab.Screen name="ContactStack" component={ContactStackNavigator} />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigators;
