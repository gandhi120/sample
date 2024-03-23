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
  infoContainer: {
    marginTop: DeviceUiInfo.verticalScale(20),
    backgroundColor: Colors.black,
    paddingHorizontal: DeviceUiInfo.verticalScale(5),
    marginBottom: DeviceUiInfo.verticalScale(15),
  },
  likeIconContainer: {
    height: DeviceUiInfo.verticalScale(18),
    width: DeviceUiInfo.verticalScale(18),
  },
  likeIcon: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(15),
    alignSelf: 'center',
  },
  likeButton: {
    position: 'absolute',
    right: DeviceUiInfo.verticalScale(8),
    top: DeviceUiInfo.verticalScale(8),
    height: DeviceUiInfo.verticalScale(18),
    width: DeviceUiInfo.verticalScale(18),
    zIndex: 9,
  },
  titleText: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(15),
    fontFamily: type.rubikMedium,
    marginBottom: DeviceUiInfo.verticalScale(5),
  },
  descriptionText: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(12),
    fontFamily: type.rubikRegular,
  },
  sizeContainer: {
    marginTop: DeviceUiInfo.verticalScale(20),
    borderColor: Colors.white,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    paddingHorizontal: DeviceUiInfo.verticalScale(12),
    paddingVertical: DeviceUiInfo.verticalScale(15),
    marginBottom: DeviceUiInfo.verticalScale(15),
  },
  sizeGuideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: DeviceUiInfo.verticalScale(10),
  },
  sizeText: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(12),
    fontFamily: type.rubikMedium,
  },
  selectSizeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  perfectSizeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: DeviceUiInfo.verticalScale(40),
    width: DeviceUiInfo.verticalScale(40),
    borderColor: Colors.white,
    borderRadius: DeviceUiInfo.verticalScale(50),
    marginRight: DeviceUiInfo.verticalScale(10),
  },
  activePerfectSizeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: DeviceUiInfo.verticalScale(40),
    width: DeviceUiInfo.verticalScale(40),
    borderColor: Colors.white,
    borderRadius: DeviceUiInfo.verticalScale(50),
    marginRight: DeviceUiInfo.verticalScale(10),
    backgroundColor: Colors.white,
  },
  perfectSizeText: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(15),
    fontFamily: type.rubikMedium,
  },
  activePerfectSizeText: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(15),
    fontFamily: type.rubikMedium,
  },
  quantityText: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(12),
    fontFamily: type.rubikRegular,
  },
});
export default styles;
