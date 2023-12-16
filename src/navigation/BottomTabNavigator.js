import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import BookStackNavigator from './stack-navigators/BookStackNavigator';
import ContactStackNavigator from './stack-navigators/ContactStackNavigator';
import CustomIcon from '@customIcon';
import {Text, View} from 'react-native';
import HeaderComponent from '@components/HeaderComponent';

const Tab = createBottomTabNavigator();

class BottomTabNavigators extends Component {
  renderIcon = iconName => {
    return (
      <CustomIcon type={'sample'} name={iconName} size={24} color="blue" />
    );
  };
  renderHeader = () => {
    return (
      <View>
        <Text>heelo</Text>
      </View>
    );
  };
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: () => this.renderIcon('home'),
          }}
        />
        {/* <Tab.Screen name="BookStack" component={BookStackNavigator} /> */}
        <Tab.Screen
          name="ContactStack"
          component={ContactStackNavigator}
          options={{
            tabBarIcon: () => this.renderIcon('cart'),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigators;
