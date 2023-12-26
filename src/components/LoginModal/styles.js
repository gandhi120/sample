import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts} from '@theme';
const {type, size} = Fonts;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginBottom: 0,
    justifyContent: 'flex-end',
  },
  subContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: DeviceUiInfo.moderateScale(16),
    borderTopRightRadius: DeviceUiInfo.moderateScale(16),
    height: DeviceUiInfo.moderateScale(310),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DeviceUiInfo.moderateScale(12),
    backgroundColor: Colors.lightBlack,
    borderTopLeftRadius: DeviceUiInfo.moderateScale(16),
    borderTopRightRadius: DeviceUiInfo.moderateScale(16),
  },
  closeIcon: {
    fontSize: size.f24,
    color: Colors.white,
  },
  headerText: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(19),
    color: Colors.white,
    lineHeight: DeviceUiInfo.moderateScale(24),
    alignSelf: 'center',
  },
  topButtonContainer: {
    width: DeviceUiInfo.moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: DeviceUiInfo.moderateScale(10),
  },
  emptyContainer: {
    width: DeviceUiInfo.moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightBlack,
    marginLeft: DeviceUiInfo.moderateScale(10),
  },
  infoContainer: {
    paddingHorizontal: DeviceUiInfo.moderateScale(18),
    paddingTop: DeviceUiInfo.moderateScale(25),
    flex: 1,
  },
  phoneText: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(15),
    color: Colors.black,
    marginBottom: DeviceUiInfo.moderateScale(15),
  },
  reviewInput: {
    borderWidth: 1,
    borderRadius: DeviceUiInfo.moderateScale(10),
    borderColor: Colors.strokeColor,
    marginHorizontal: DeviceUiInfo.moderateScale(16),
    marginBottom: DeviceUiInfo.moderateScale(16),
    height: DeviceUiInfo.verticalScale(134),
    paddingTop: DeviceUiInfo.verticalScale(12),
    paddingLeft: DeviceUiInfo.verticalScale(12),
    textAlignVertical: 'top',
    color: Colors.textGrayColor,
  },
  nextButtonContainer: {
    width: '100%',
    height: DeviceUiInfo.moderateScale(55),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: DeviceUiInfo.moderateScale(25),
    backgroundColor: Colors.skyBlue,
    marginTop: DeviceUiInfo.moderateScale(24),
    alignSelf: 'center',
  },
  nextButtonText: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(16),
    lineHeight: DeviceUiInfo.moderateScale(19),
    color: Colors.white,
  },
  otpTitle: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(15),
    color: Colors.black,
    marginBottom: DeviceUiInfo.moderateScale(15),
    alignItems: 'center',
  },
  editText: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(15),
    color: Colors.blue,
    marginBottom: DeviceUiInfo.moderateScale(15),
    alignItems: 'center',
  },
  textInputWholeContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: DeviceUiInfo.moderateScale(10),
  },
  otpInput: {
    height: DeviceUiInfo.moderateScale(35),
    width: DeviceUiInfo.moderateScale(35),
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: DeviceUiInfo.moderateScale(5),
  },
  errorMsg: {
    color: Colors.danger,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    fontSize: size.medium,
  },
  resendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: DeviceUiInfo.moderateScale(8),
  },
  resendText: {
    color: Colors.skyBlue,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    fontSize: size.medium,
  },
  policyText: {
    color: Colors.lightBlack,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    fontSize: size.medium,
    marginTop: DeviceUiInfo.moderateScale(8),
  },
});

export default styles;
