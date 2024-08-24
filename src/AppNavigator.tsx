import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home/Home';
import Settings from './Settings';
import CustomHeader from '@customHeader';

export type RootStackParamList = {
  Home: undefined;
  Settings: {email: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          header: props => <CustomHeader {...props} />, // Custom Header
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            // header: props => <CustomHeader {...props} />, // Custom Header
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
