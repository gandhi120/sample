import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts} from '@theme';
const {type} = Fonts;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.lightBlack,
    height: DeviceUiInfo.verticalScale(45),
    paddingHorizontal: DeviceUiInfo.verticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: DeviceUiInfo.moderateScale(20),
    color: Colors.secondary,
    fontFamily: type.rubikSemiBold,
  },
  headerSubTitleText: {
    fontSize: DeviceUiInfo.moderateScale(13),
    color: Colors.secondary,
    fontFamily: type.rubikRegular,
  },
  topButtonContainer: {
    width: DeviceUiInfo.moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontSize: DeviceUiInfo.moderateScale(30),
    color: Colors.white,
  },
});
export default styles;
