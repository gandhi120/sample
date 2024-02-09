import {Colors, Metrics} from '@theme';
import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';

const {screenWidth} = Metrics;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  recyclerBackground: {
    backgroundColor: Colors.pageBackground,
    flexDirection: 'row',
  },
  eqcListView: {
    backgroundColor: Colors.pageBackground,
    width: (screenWidth - 20) / 2,
    height: DeviceUiInfo.moderateScale(300),
    marginBottom: DeviceUiInfo.moderateScale(45),
    marginLeft: DeviceUiInfo.moderateScale(6.66),
  },
});
