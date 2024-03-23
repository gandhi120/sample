import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts} from '@theme';
const {type} = Fonts;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headerTitleText: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(18),
    color: Colors.white,
  },
  likeIconContainer: {
    width: DeviceUiInfo.moderateScale(30),
    height: DeviceUiInfo.moderateScale(20),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  likeIcon: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(15),
    marginRight: DeviceUiInfo.verticalScale(5),
  },
  indexOneView: {
    flex: 1,
    paddingLeft: DeviceUiInfo.moderateScale(12),
    backgroundColor: Colors.lightGray,
    paddingTop: DeviceUiInfo.moderateScale(12),
  },
});
export default styles;
