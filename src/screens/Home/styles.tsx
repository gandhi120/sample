// HomeScreenStyles.ts
import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts, Metrics} from '@theme';
const {size, type} = Fonts;
const {screenWidth} = Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  noScrollItem: {
    paddingVertical: DeviceUiInfo.moderateScale(20),
    paddingRight: DeviceUiInfo.moderateScale(20),
    paddingLeft: DeviceUiInfo.moderateScale(5),
    margin: DeviceUiInfo.moderateScale(5),
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  root: {
    paddingHorizontal: DeviceUiInfo.moderateScale(10),
    paddingVertical: DeviceUiInfo.moderateScale(20),
    margin: DeviceUiInfo.moderateScale(5),
    backgroundColor: Colors.question,
    borderRadius: DeviceUiInfo.moderateScale(10),
  },
  bannerStyle: {
    height: DeviceUiInfo.moderateScale(60),
    width: DeviceUiInfo.moderateScale(85),
  },
  background: {
    height: DeviceUiInfo.moderateScale(12),
    width: DeviceUiInfo.moderateScale(150),
    marginBottom: DeviceUiInfo.moderateScale(10),
  },
  bannerText: {
    fontSize: size.f7,
    color: Colors.text,
    fontFamily: type.rubikRegular,
    paddingLeft: DeviceUiInfo.moderateScale(15),
  },
  questionText: {
    fontSize: size.f16,
    color: Colors.questionText,
    fontFamily: type.rubikSemiBold,
    marginBottom: DeviceUiInfo.moderateScale(10),
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    borderRadius: DeviceUiInfo.moderateScale(10),
    height: DeviceUiInfo.moderateScale(50),
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    width: (screenWidth - DeviceUiInfo.moderateScale(47)) / 2,
  },
  yesButton: {
    backgroundColor: Colors.blue,
  },
  noButton: {
    backgroundColor: Colors.lightGreen,
  },
  yesText: {
    fontSize: size.f14,
    color: Colors.secondary,
    fontFamily: type.rubikSemiBold,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: DeviceUiInfo.moderateScale(20),
    marginBottom: DeviceUiInfo.moderateScale(20),
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
    height: DeviceUiInfo.moderateScale(60),
    width: DeviceUiInfo.moderateScale(55),
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DeviceUiInfo.moderateScale(5),
    marginRight: DeviceUiInfo.moderateScale(15),
  },
  iplImage: {
    height: DeviceUiInfo.moderateScale(30),
    width: DeviceUiInfo.moderateScale(45),
  },
});

export default styles;
