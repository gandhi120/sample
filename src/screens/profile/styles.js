import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@theme';
import DeviceUiInfo from '@utils/DeviceUiInfo';
const {type} = Fonts;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.lightBlack,
    paddingLeft: DeviceUiInfo.moderateScale(10),
    paddingVertical: DeviceUiInfo.moderateScale(15),
  },
  userName: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(15),
    color: Colors.white,
  },
  userEmail: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(13),
    color: Colors.white,
  },
  avatar: {
    height: DeviceUiInfo.moderateScale(40),
    width: DeviceUiInfo.moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.skyBlue,
    borderRadius: DeviceUiInfo.moderateScale(100),
    marginRight: DeviceUiInfo.moderateScale(5),
  },
  shortName: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(15),
    color: Colors.white,
  },
  orderIcon: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(10),
  },
  scroll: {
    paddingHorizontal: DeviceUiInfo.verticalScale(10),
    paddingTop: DeviceUiInfo.verticalScale(20),
    backgroundColor: Colors.white,
  },

  titleDropContainer: {
    backgroundColor: Colors.white,
    height: DeviceUiInfo.verticalScale(40),
  },
  dropdown: {
    height: DeviceUiInfo.verticalScale(45),
    borderColor: Colors.selected,
    borderWidth: DeviceUiInfo.verticalScale(0.5),
    borderRadius: DeviceUiInfo.verticalScale(4),
    paddingHorizontal: DeviceUiInfo.verticalScale(8),
    marginBottom: DeviceUiInfo.verticalScale(18),
  },
  icon: {
    marginRight: DeviceUiInfo.verticalScale(5),
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: DeviceUiInfo.verticalScale(10),
    top: DeviceUiInfo.verticalScale(-6),
    zIndex: DeviceUiInfo.verticalScale(999),
    paddingHorizontal: DeviceUiInfo.verticalScale(4),
    fontSize: DeviceUiInfo.verticalScale(12),
    color: Colors.green,
  },
  placeholderStyle: {
    fontSize: DeviceUiInfo.verticalScale(16),
    fontFamily: type.rubikRegular,
    color: Colors.primaryDark,
  },
  selectedTextStyle: {
    fontSize: DeviceUiInfo.verticalScale(16),
    fontFamily: type.rubikRegular,
    color: Colors.black,
  },
  iconStyle: {
    width: DeviceUiInfo.verticalScale(20),
    height: DeviceUiInfo.verticalScale(20),
  },
  inputSearchStyle: {
    height: DeviceUiInfo.verticalScale(40),
    fontSize: DeviceUiInfo.verticalScale(16),
  },
  firstNameContainer: {
    marginBottom: DeviceUiInfo.verticalScale(18),
  },
  firstName: {
    width: '100%',
    height: DeviceUiInfo.verticalScale(45),
    borderColor: Colors.selected,
    borderWidth: DeviceUiInfo.verticalScale(0.5),
    borderRadius: DeviceUiInfo.verticalScale(4),
    paddingHorizontal: DeviceUiInfo.verticalScale(8),
    fontSize: DeviceUiInfo.verticalScale(16),
    fontFamily: type.rubikRegular,
    color: Colors.black,
  },
  emailInput: {
    // width: '100%',
    flex: 1,
    height: DeviceUiInfo.verticalScale(45),
    // borderColor: Colors.selected,
    // borderWidth: DeviceUiInfo.verticalScale(0.5),
    // borderRadius: DeviceUiInfo.verticalScale(4),
    paddingHorizontal: DeviceUiInfo.verticalScale(8),
    fontSize: DeviceUiInfo.verticalScale(16),
    fontFamily: type.rubikRegular,
    color: Colors.black,
  },
  firstText: {
    position: 'absolute',
    backgroundColor: 'white',
    left: DeviceUiInfo.verticalScale(10),
    top: DeviceUiInfo.verticalScale(-6),
    zIndex: DeviceUiInfo.verticalScale(999),
    paddingHorizontal: DeviceUiInfo.verticalScale(4),
    fontSize: DeviceUiInfo.verticalScale(12),
  },
  mobileNumber: {
    width: '100%',
    height: DeviceUiInfo.verticalScale(45),
    borderColor: Colors.selected,
    borderWidth: DeviceUiInfo.verticalScale(0.5),
    borderRadius: DeviceUiInfo.verticalScale(4),
    paddingHorizontal: DeviceUiInfo.verticalScale(8),
    marginBottom: DeviceUiInfo.verticalScale(18),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  phoneNumber: {
    fontSize: DeviceUiInfo.verticalScale(16),
    fontFamily: type.rubikRegular,
    color: Colors.black,
  },
  topButtonContainer: {
    height: DeviceUiInfo.verticalScale(40),
    backgroundColor: Colors.skyBlue,
    borderRadius: DeviceUiInfo.verticalScale(4),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: DeviceUiInfo.verticalScale(10),
    marginVertical: DeviceUiInfo.verticalScale(10),
  },
  emptyBox: {
    flex: 1,
  },
  saveText: {
    fontSize: DeviceUiInfo.verticalScale(14),
    fontFamily: type.rubikMedium,
    color: Colors.white,
  },
  emailContainer: {
    height: DeviceUiInfo.verticalScale(45),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.selected,
    borderWidth: DeviceUiInfo.verticalScale(0.5),
    borderRadius: DeviceUiInfo.verticalScale(4),
  },
  verifyContainer: {
    // backgroundColor: '#faf',
    paddingRight: DeviceUiInfo.verticalScale(8),
    height: DeviceUiInfo.verticalScale(45),
    justifyContent: 'center',
  },
  verifyText: {
    fontSize: DeviceUiInfo.verticalScale(14),
    fontFamily: type.rubikMedium,
    color: Colors.skyBlue,
    letterSpacing: 2,
  },
});

export default styles;
