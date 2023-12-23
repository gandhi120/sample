import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts, Metrics} from '@theme';
const {type, size} = Fonts;
const {screenHeight, screenWidth} = Metrics;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginBottom: 0,
    justifyContent: 'flex-end',
    flex: 1,
  },
  subContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: DeviceUiInfo.moderateScale(16),
    borderTopRightRadius: DeviceUiInfo.moderateScale(16),
    height: screenHeight - DeviceUiInfo.moderateScale(200),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DeviceUiInfo.moderateScale(12),
    backgroundColor: Colors.black,
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
    backgroundColor: Colors.black,
    marginLeft: DeviceUiInfo.moderateScale(10),
  },
  infoContainer: {
    flex: 1,
  },

  customDrop: {
    flex: 1,
  },
  userRoot: {
    backgroundColor: Colors.black,
    borderBottomWidth: 1,
    paddingTop: DeviceUiInfo.moderateScale(25),
    paddingBottom: DeviceUiInfo.moderateScale(75),
    paddingHorizontal: DeviceUiInfo.moderateScale(10),
    marginBottom: DeviceUiInfo.moderateScale(70),
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  orderTransactionContainer: {
    borderRadius: DeviceUiInfo.moderateScale(10),
    borderColor: Colors.primaryDark,
    width: screenWidth - DeviceUiInfo.moderateScale(40),
    height: DeviceUiInfo.moderateScale(100),
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: DeviceUiInfo.moderateScale(90),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  boxShadowIos: {
    shadowColor: Colors.primaryDark,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  boxShadowAndroid: {
    elevation: 4,
    shadowColor: Colors.primaryDark,
  },
  emptyVerticalContainer: {
    borderWidth: 0.5,
    height: DeviceUiInfo.moderateScale(60),
    borderColor: Colors.greyWhite,
  },
  orderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (screenWidth - DeviceUiInfo.moderateScale(40)) / 3,
  },
  orderIconContainer: {
    backgroundColor: Colors.gray,
    height: DeviceUiInfo.moderateScale(40),
    width: DeviceUiInfo.moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DeviceUiInfo.moderateScale(80),
    marginBottom: DeviceUiInfo.moderateScale(5),
  },
  orderIcon: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(15),
  },
  orderText: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(15),
    color: Colors.black,
  },
  settingContainer: {
    paddingHorizontal: DeviceUiInfo.moderateScale(25),
    paddingVertical: DeviceUiInfo.moderateScale(8),
  },
  accountText: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(15),
    color: Colors.primaryDark,
    letterSpacing: DeviceUiInfo.moderateScale(2),
    paddingHorizontal: DeviceUiInfo.moderateScale(15),
    marginBottom: DeviceUiInfo.moderateScale(10),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileIconContainer: {
    backgroundColor: Colors.gray,
    height: DeviceUiInfo.moderateScale(30),
    width: DeviceUiInfo.moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DeviceUiInfo.moderateScale(5),
    marginRight: DeviceUiInfo.moderateScale(10),
  },
  profileText: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(15),
    color: Colors.black,
  },
  separateLine: {
    width: '100%',
    height: 0,
    borderWidth: 0.5,
    borderColor: Colors.gray,
  },
});

export default styles;
