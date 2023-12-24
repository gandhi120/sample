import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarContainer: {
    transform: [{translateY: 0}],
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'none',
  },
});
export default styles;
