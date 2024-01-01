import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts} from '@theme';

const {type} = Fonts;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    backgroundColor: Colors.white,
    borderRadius: DeviceUiInfo.moderateScale(16),
    width: DeviceUiInfo.moderateScale(254),
    padding: DeviceUiInfo.moderateScale(16),
  },
  title: {
    fontSize: DeviceUiInfo.moderateScale(20),
    fontFamily: type.rubikMedium,
    lineHeight: DeviceUiInfo.moderateScale(28),
    textAlign: 'center',
    marginBottom: DeviceUiInfo.moderateScale(8),
    color: Colors.primaryHeader,
  },
  alertDescription: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(16),
    color: Colors.info,
    lineHeight: DeviceUiInfo.moderateScale(24),
    // backgroundColor: 'red',
    textAlign: 'center',
    marginBottom: DeviceUiInfo.moderateScale(16),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  okButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  okContainer: {
    width: DeviceUiInfo.moderateScale(103),
    backgroundColor: Colors.primaryHeader,
    paddingVertical: DeviceUiInfo.moderateScale(8),
    borderRadius: DeviceUiInfo.moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  okText: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(16),
    color: Colors.white,
    lineHeight: DeviceUiInfo.moderateScale(24),
  },
});
export default styles;
