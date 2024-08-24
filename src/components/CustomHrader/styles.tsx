import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts} from '@theme';
const {size, type} = Fonts;

// const {size, type} = Fonts;

const styles = StyleSheet.create({
  headerRoot: {
    backgroundColor: Colors.lightBlack,
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
  leftContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: size.f15,
    color: Colors.secondary,
    fontFamily: type.rubikMedium,
    marginRight: DeviceUiInfo.moderateScale(10),
    letterSpacing: DeviceUiInfo.moderateScale(1),
  },
  closeIcon: {
    color: Colors.secondary,
    fontSize: DeviceUiInfo.moderateScale(20),
  },
  notificationContainer: {
    // height: DeviceUiInfo.moderateScale(20),
    // width: DeviceUiInfo.moderateScale(20),
    borderRadius: DeviceUiInfo.moderateScale(20),
    backgroundColor: Colors.black,
    borderWidth: 2,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    padding: DeviceUiInfo.moderateScale(8),
  },
  notificationIcon: {
    color: Colors.secondary,
    fontSize: DeviceUiInfo.moderateScale(15),
  },
  switchContainer: {
    height: DeviceUiInfo.moderateScale(19),
    width: DeviceUiInfo.moderateScale(36),
    borderRadius: DeviceUiInfo.moderateScale(38),
    borderWidth: 2,
    borderColor: Colors.border,
    backgroundColor: Colors.dayNight,
    marginRight: DeviceUiInfo.moderateScale(10),
    padding: DeviceUiInfo.moderateScale(1),
    justifyContent: 'center',
  },
  emptyView: {
    height: DeviceUiInfo.moderateScale(14),
    width: DeviceUiInfo.moderateScale(15),
    backgroundColor: Colors.black,
    borderRadius: DeviceUiInfo.moderateScale(30),
  },
});

export default styles;
