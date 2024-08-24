import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts, Metrics} from '@theme';
const {type, size} = Fonts;
const {screenWidth} = Metrics;

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
    height: DeviceUiInfo.moderateScale(410),
    overflow: 'hidden',
    backgroundColor: Colors.black,
    paddingVertical: DeviceUiInfo.moderateScale(10),
    paddingHorizontal: DeviceUiInfo.moderateScale(10),
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
    width: DeviceUiInfo.moderateScale(40),
    height: DeviceUiInfo.moderateScale(13),
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: DeviceUiInfo.moderateScale(8),
    borderRadius: DeviceUiInfo.moderateScale(10),
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionSubContainer: {
    flex: 1,
  },
  questionSubText: {
    fontSize: size.f10,
    color: Colors.secondary,
    fontFamily: type.rubikRegular,
  },
  imageContainer: {
    height: DeviceUiInfo.moderateScale(50),
    width: DeviceUiInfo.moderateScale(45),
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DeviceUiInfo.moderateScale(15),
  },
  iplImage: {
    height: DeviceUiInfo.moderateScale(25),
    width: DeviceUiInfo.moderateScale(35),
  },
  questionText: {
    fontSize: size.f16,
    color: Colors.secondary,
    fontFamily: type.rubikSemiBold,
    // marginBottom: DeviceUiInfo.moderateScale(10),
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.dayNight,
    borderRadius: DeviceUiInfo.moderateScale(100),
    marginTop:DeviceUiInfo.moderateScale(20),
  },
  buttonContainer: {
    borderRadius: DeviceUiInfo.moderateScale(100),
    height: DeviceUiInfo.moderateScale(50),
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    width: (screenWidth - DeviceUiInfo.moderateScale(47)) / 2,
    borderWidth: DeviceUiInfo.moderateScale(3),
  },
  defaultBackGround: {
    backgroundColor: Colors.dayNight,
    borderWidth: 0,
  },
  yesButton: {
    backgroundColor: Colors.blue,
    borderColor: Colors.blueBorder,
  },
  noButton: {
    backgroundColor: Colors.lightGreen,
    borderColor: Colors.greenBorder,
  },
  yesText: {
    fontSize: size.f14,
    color: Colors.secondary,
    fontFamily: type.rubikSemiBold,
  },
});

export default styles;
