import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts, Metrics} from '@theme';
const {type} = Fonts;
const {screenHeight, screenWidth} = Metrics;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  cartIconContainer: {
    width: DeviceUiInfo.moderateScale(50),
    height: DeviceUiInfo.moderateScale(30),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cartIcon: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(20),
    marginRight: DeviceUiInfo.verticalScale(5),
  },
  bottomContainer: {
    backgroundColor: Colors.gray,
    height: DeviceUiInfo.verticalScale(50),
    paddingHorizontal: DeviceUiInfo.verticalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addToCartButton: {
    height: DeviceUiInfo.moderateScale(35),
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    paddingHorizontal: DeviceUiInfo.moderateScale(20),
    borderRadius: DeviceUiInfo.moderateScale(8),
  },
  addToCartText: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(12),
    color: Colors.white,
    letterSpacing: DeviceUiInfo.moderateScale(2),
  },
  priceText: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(15),
    fontFamily: type.rubikRegular,
  },
  sliderContainer: {
    backgroundColor: Colors.gray,
    height: screenHeight / 2,
  },
  imageContainer: {
    height: screenHeight / 2,
  },
  tinyLogo: {
    height: screenHeight / 2,
    width: screenWidth,
    resizeMode: 'stretch',
  },
  scrollBarContainer: {
    flexDirection: 'row',
    height: DeviceUiInfo.verticalScale(10),
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: DeviceUiInfo.verticalScale(5),
  },
  emptyView: {
    width: DeviceUiInfo.verticalScale(20),
    height: DeviceUiInfo.verticalScale(5),
    borderRadius: DeviceUiInfo.verticalScale(15),
    backgroundColor: Colors.gray,
    marginLeft: DeviceUiInfo.verticalScale(5),
  },
});
export default styles;
