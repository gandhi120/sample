import {Colors, Fonts} from '@theme';
import DeviceUiInfo from '@utils/DeviceUiInfo';
const {size, type} = Fonts;

export default {
  container: {
    marginVertical: DeviceUiInfo.moderateScale(5),
    borderWidth: 1,
    borderColor: Colors.strokeColor,
    borderRadius: DeviceUiInfo.moderateScale(12),
    borderStyle: 'solid',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalSep: {
    height: DeviceUiInfo.moderateScale(32),
    backgroundColor: Colors.strokeColor,
    width: DeviceUiInfo.moderateScale(1),
  },
  inputStyle: {
    fontSize: size.smallMedium,
    fontFamily: type.rubikRegular,
    height: DeviceUiInfo.moderateScale(48),
  },
  textStyle: {
    fontSize: size.small,
    fontFamily: type.rubikRegular,
    color: Colors.textGrayColor,
  },
  iconTextStyle: {
    fontSize: size.f16,
    fontFamily: type.rubikRegular,
    color: Colors.textGrayColor,
    lineHeight: DeviceUiInfo.moderateScale(24),
    marginRight: DeviceUiInfo.moderateScale(12),
  },
  inputCtrl: {
    color: Colors.text,
    alignItems: 'center',
  },
  errorMsg: {
    color: Colors.danger,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    fontSize: size.medium,
  },

  nextButtonText: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(16),
    lineHeight: DeviceUiInfo.moderateScale(19),
    color: Colors.white,
  },
};
