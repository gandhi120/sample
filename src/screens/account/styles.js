import {StyleSheet} from 'react-native';
import Colors from '@theme/colors';
import DeviceUiInfo from '@utils/DeviceUiInfo';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  loginText: {
    fontSize: DeviceUiInfo.moderateScale(14),
    color: Colors.secondary,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  loginButtonContainer: {
    width: DeviceUiInfo.moderateScale(70),
    height: DeviceUiInfo.moderateScale(27),
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DeviceUiInfo.moderateScale(10),
  },
});
export default styles;
