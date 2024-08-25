import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts} from '@theme';
const {size, type} = Fonts;

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
  },
  rootContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.black,
    paddingBottom: DeviceUiInfo.moderateScale(10),
    paddingHorizontal: DeviceUiInfo.moderateScale(10),
    paddingTop: DeviceUiInfo.moderateScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: DeviceUiInfo.moderateScale(40),
    borderTopRightRadius: DeviceUiInfo.moderateScale(40),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: Colors.black,
    paddingHorizontal: DeviceUiInfo.moderateScale(10),
    paddingTop: DeviceUiInfo.moderateScale(10),
    height: DeviceUiInfo.moderateScale(70),
    borderBottomLeftRadius: DeviceUiInfo.moderateScale(100),
    borderBottomRightRadius: DeviceUiInfo.moderateScale(100),
  },
  singleTabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: DeviceUiInfo.moderateScale(55),
    width: DeviceUiInfo.moderateScale(55),
    borderRadius: DeviceUiInfo.moderateScale(55),
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginBottom: DeviceUiInfo.moderateScale(7),
  },
  closeIcon: {
    color: Colors.secondary,
    fontSize: DeviceUiInfo.moderateScale(20),
  },
  tabNameText: {
    fontSize: size.f14,
    color: Colors.secondary,
    fontFamily: type.rubikMedium,
  },
});

export default styles;
