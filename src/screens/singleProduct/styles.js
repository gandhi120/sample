import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors} from '@theme';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  cartIconContainer: {
    width: DeviceUiInfo.moderateScale(50),
    height: DeviceUiInfo.moderateScale(30),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cartIcon: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(20),
    marginRight: DeviceUiInfo.verticalScale(5),
  },
});
export default styles;
