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
    width: (screenWidth + 0.5) / 2,
    borderWidth: 0.5,
    height: DeviceUiInfo.moderateScale(300),
  },
});
