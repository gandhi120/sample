import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/FontAwesome';
import CustomIcon from '@customIcon';

const Stack = createNativeStackNavigator();

const Home = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home screen!</Text>
    {/* <Icon name="rocket" size={30} color="#900" /> */}
    <CustomIcon name={'home'} size={24} color="blue" />
  </View>
);

class HomeStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
}

export default HomeStackNavigator;
