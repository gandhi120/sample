import {Colors, Metrics} from '@theme';
import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';

const {screenWidth} = Metrics;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  singleWholeCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DeviceUiInfo.moderateScale(20),
  },
  subContainer: {},
  recyclerBackground: {
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    width: (screenWidth - 39) / 2,
    height: DeviceUiInfo.moderateScale(220),
    borderRadius: DeviceUiInfo.moderateScale(20),
    marginLeft: DeviceUiInfo.moderateScale(12),
  },
  eqcListView: {
    backgroundColor: Colors.secondary,
    width: (screenWidth - 39) / 2,
    height: DeviceUiInfo.moderateScale(220),
    marginBottom: DeviceUiInfo.moderateScale(45),
    marginRight: DeviceUiInfo.moderateScale(12),
    borderRadius: DeviceUiInfo.moderateScale(20),
  },
  title: {
    width: DeviceUiInfo.moderateScale(100),
    height: DeviceUiInfo.moderateScale(10),
    marginLeft: DeviceUiInfo.moderateScale(12),
    backgroundColor: Colors.secondary,
    borderRadius: DeviceUiInfo.moderateScale(12),
    marginTop: DeviceUiInfo.moderateScale(10),
  },
  description: {
    width: DeviceUiInfo.moderateScale(150),
    height: DeviceUiInfo.moderateScale(10),
    marginLeft: DeviceUiInfo.moderateScale(12),
    backgroundColor: Colors.secondary,
    borderRadius: DeviceUiInfo.moderateScale(12),
    marginTop: DeviceUiInfo.moderateScale(10),
  },
  price: {
    width: DeviceUiInfo.moderateScale(50),
    height: DeviceUiInfo.moderateScale(10),
    marginLeft: DeviceUiInfo.moderateScale(12),
    backgroundColor: Colors.secondary,
    borderRadius: DeviceUiInfo.moderateScale(12),
    marginTop: DeviceUiInfo.moderateScale(10),
  },
});
