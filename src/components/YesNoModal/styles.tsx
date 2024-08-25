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
    borderTopLeftRadius: DeviceUiInfo.moderateScale(16),
    borderTopRightRadius: DeviceUiInfo.moderateScale(16),
    // height: DeviceUiInfo.moderateScale(810),
    overflow: 'hidden',
    backgroundColor: Colors.black,
    paddingTop: DeviceUiInfo.moderateScale(10),
    paddingHorizontal: DeviceUiInfo.moderateScale(10),
    paddingBottom: DeviceUiInfo.moderateScale(30),
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
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.dayNight,
    borderRadius: DeviceUiInfo.moderateScale(100),
    marginTop: DeviceUiInfo.moderateScale(20),
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
  priceContainer: {
    backgroundColor: Colors.priceBack,
    marginTop: DeviceUiInfo.moderateScale(20),
    borderRadius: DeviceUiInfo.moderateScale(10),
    paddingHorizontal: DeviceUiInfo.moderateScale(10),
    paddingVertical: DeviceUiInfo.moderateScale(12),
    borderWidth: DeviceUiInfo.moderateScale(3),
    borderColor: Colors.priceBorder,
  },
  showPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: size.f14,
    color: Colors.secondary,
    fontFamily: type.rubikSemiBold,
  },
  qtyText: {
    fontSize: size.f14,
    color: Colors.secondary,
    fontFamily: type.rubikRegular,
    alignSelf: 'flex-end',
    marginTop: DeviceUiInfo.moderateScale(5),
    marginBottom: DeviceUiInfo.moderateScale(10),
  },
  sliderRootContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  incrementContainer: {
    height: DeviceUiInfo.moderateScale(45),
    width: DeviceUiInfo.moderateScale(45),
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DeviceUiInfo.moderateScale(17),
  },
  signText: {
    fontSize: size.f17,
    color: Colors.black,
    fontFamily: type.rubikRegular,
  },
  dash: {
    // borderWidth: 0.5,
    borderColor: Colors.secondary,
  },
  dashContainer: {
    marginVertical: DeviceUiInfo.moderateScale(17),
    paddingHorizontal: DeviceUiInfo.moderateScale(1),
  },
  putGetContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftContainer: {
    paddingHorizontal: DeviceUiInfo.moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  putPriceText: {
    fontSize: size.f14,
    color: Colors.secondary,
    fontFamily: type.rubikSemiBold,
    marginBottom: DeviceUiInfo.moderateScale(8),
  },
  putPriceColor: {
    color: Colors.green,
  },
  youText: {
    fontSize: size.f14,
    color: Colors.secondary,
    fontFamily: type.rubikRegular,
  },
  swipeContainer: {
    height: DeviceUiInfo.moderateScale(70),
    marginHorizontal: DeviceUiInfo.moderateScale(5),
    marginVertical: DeviceUiInfo.moderateScale(10),
    borderRadius: DeviceUiInfo.moderateScale(70),
    justifyContent: 'center',
    padding: DeviceUiInfo.moderateScale(10),
  },
  blueSwipe: {
    backgroundColor: Colors.blue,
  },
  greenSwipe: {
    backgroundColor: Colors.lightGreen,
  },
  roundContainer: {
    height: DeviceUiInfo.moderateScale(56),
    width: DeviceUiInfo.moderateScale(56),
    borderRadius: DeviceUiInfo.moderateScale(30),
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  doubleIcon: {
    color: Colors.blue,
    fontSize: DeviceUiInfo.moderateScale(29),
  },
  greenDoubleIcon: {
    color: Colors.lightGreen,
  },
  blueDoubleIcon: {
    color: Colors.blue,
  },
  swipeText: {
    alignSelf: 'center',
    fontSize: size.f15,
    color: Colors.secondary,
    fontFamily: type.rubikSemiBold,
  },
  balanceText: {
    alignSelf: 'center',
    fontSize: size.f13,
    color: Colors.secondary,
    fontFamily: type.rubikSemiBold,
    marginVertical: DeviceUiInfo.moderateScale(5),
  },
});

export default styles;
