import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts, Metrics} from '@theme';
const {type, size} = Fonts;
const {screenHeight, screenWidth} = Metrics;

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'none',
  },
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    height: DeviceUiInfo.moderateScale(45),
    flexDirection: 'row',
  },
  homeButtonContainer: {
    width: DeviceUiInfo.verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeHomeButtonContainer: {
    backgroundColor: 'white',
    width: DeviceUiInfo.verticalScale(40),
    height: DeviceUiInfo.verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DeviceUiInfo.verticalScale(10),
  },
  activeHomeIcon: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(20),
  },
  homeIcon: {
    color: Colors.primaryDark,
    fontSize: DeviceUiInfo.verticalScale(20),
  },
});
export default styles;
