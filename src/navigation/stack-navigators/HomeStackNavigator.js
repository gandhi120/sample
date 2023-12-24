import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@home';
import Profile from '@profile';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        navigation={props.navigation}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        navigation={props.navigation}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
