import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home/Home';
import Settings from './Settings';
import CustomHeader from '@customHeader';
import {SafeAreaView, Text, View} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '@customTabBar';
export type RootStackParamList = {
  Home: undefined;
  Settings: {email: string};
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function PortfolioScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Portfolio Screen</Text>
    </View>
  );
}

// Screens for the second stack
function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function WalletScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Wallet Screen</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => <CustomHeader {...props} title={'Category'}/>, // Custom Header
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
  );
}

const AppNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}
            tabBar={props => <CustomTabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Portfolio" component={PortfolioScreen} />
            <Tab.Screen name="Wallet" component={WalletScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};
export default AppNavigator;
