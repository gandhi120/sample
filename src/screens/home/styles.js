import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts, Metrics} from '@theme';
const {screenHeight} = Metrics;

const {type, size} = Fonts;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  loginText: {
    fontSize: DeviceUiInfo.moderateScale(14),
    color: Colors.secondary,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  loginButtonContainer: {
    width: DeviceUiInfo.moderateScale(50),
    height: DeviceUiInfo.moderateScale(30),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: 0,
    marginBottom: 0,
    justifyContent: 'flex-end',
  },
  subContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: DeviceUiInfo.moderateScale(16),
    borderTopRightRadius: DeviceUiInfo.moderateScale(16),
    height: screenHeight - DeviceUiInfo.moderateScale(80),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: DeviceUiInfo.moderateScale(16),
    paddingVertical: DeviceUiInfo.moderateScale(12),
    backgroundColor: Colors.skyBlue,
    borderTopLeftRadius: DeviceUiInfo.moderateScale(16),
    borderTopRightRadius: DeviceUiInfo.moderateScale(16),
  },
  closeIcon: {
    fontSize: size.f24,
    color: Colors.black,
    alignSelf: 'flex-start',
  },
  headerText: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(19),
    color: Colors.white,
    lineHeight: DeviceUiInfo.moderateScale(24),
    alignSelf: 'center',
  },
  topButtonContainer: {
    width: DeviceUiInfo.moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
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
    backgroundColor: Colors.primaryHeader,
    marginTop: DeviceUiInfo.moderateScale(24),
    alignSelf: 'center',
  },
  userIcon: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(20),
  },
  indexOneView: {
    flex: 1,
    marginBottom: DeviceUiInfo.moderateScale(45),
  },
  searchHeaderContainer: {
    paddingTop: DeviceUiInfo.moderateScale(15),
    paddingBottom: DeviceUiInfo.moderateScale(11),
    backgroundColor: Colors.pageBackground,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: DeviceUiInfo.moderateScale(11),
    width: '100%',
  },
  searchContainer: {
    flex: 1,
    height: DeviceUiInfo.moderateScale(43),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: DeviceUiInfo.moderateScale(10),
    borderRadius: DeviceUiInfo.moderateScale(200),
    backgroundColor: Colors.white,
  },
  searchIconContainer: {
    paddingLeft: DeviceUiInfo.moderateScale(10),
  },
  searchIcon: {
    color: Colors.textGrayColor,
    fontSize: DeviceUiInfo.moderateScale(18),
  },
  searchTextContainer: {
    flex: 1,
    color: Colors.strokeColor,
    justifyContent: 'center',
  },
  searchTextInput: {
    justifyContent: 'center',
    paddingLeft: DeviceUiInfo.moderateScale(10),
    color: Colors.textGrayColor,
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(16),
  },
});
export default styles;
