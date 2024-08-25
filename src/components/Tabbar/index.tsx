import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import CustomIcon from '@customIcon';
import Animated from 'react-native-reanimated';

type route = {
  key: string;
  name: string;
  params: undefined;
};
const CustomTabBar = ({state, descriptors, navigation}) => {
  const getName = (name: string): string => {
    let iconName = '';
    if (name === 'Home') {
      iconName = 'home';
    } else if (name === 'Portfolio') {
      iconName = 'creditCard';
    } else if (name === 'Wallet') {
      iconName = 'transaction';
    } else {
      iconName = 'user';
    }
    return iconName;
  };

  const onPress = (routeName: string) => {
    navigation.navigate(routeName);
  };
  
  return (
    <Animated.View style={styles.tabBarContainer}>
      <View style={styles.rootContainer}>
        {state.routes.map((item: route) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(item.name)}
              style={styles.singleTabContainer}
              key={item.name}>
              <View style={styles.iconContainer}>
                <CustomIcon
                  name={getName(item.name)}
                  type={'sample'}
                  style={styles.closeIcon}
                />
              </View>
              <Text style={styles.tabNameText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
};
export default CustomTabBar;
