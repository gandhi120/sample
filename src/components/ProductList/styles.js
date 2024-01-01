import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts, Metrics} from '@theme';
const {type} = Fonts;
const {screenWidth} = Metrics;

const styles = StyleSheet.create({
  rootContainer: {
    width: DeviceUiInfo.moderateScale(screenWidth / 2),
    borderWidth: 0.5,
  },
  productContainer: {
    height: DeviceUiInfo.moderateScale(300),
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: DeviceUiInfo.moderateScale(200),
  },
  imageContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    backgroundColor: 'black',
    flex: 1,
    width: '100%',
    paddingVertical: DeviceUiInfo.moderateScale(8),
    paddingLeft: DeviceUiInfo.moderateScale(6),
    paddingRight: DeviceUiInfo.moderateScale(10),
  },
  titleText: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(13),
    color: Colors.white,
  },
  subTitle: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(12),
    color: Colors.white,
  },
  price: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(12),
    color: Colors.white,
  },
  infoRoot: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  likeIconContainer: {
    height: DeviceUiInfo.verticalScale(18),
    width: DeviceUiInfo.verticalScale(18),
  },
  likeIcon: {
    color: Colors.primaryDark,
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
  rateCountContainer: {
    position: 'absolute',
    zIndex: 999,
    right: 0,
    left: 5,
    bottom: 5,
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: DeviceUiInfo.verticalScale(45),
    height: DeviceUiInfo.verticalScale(20),
    borderRadius: DeviceUiInfo.verticalScale(20),
    paddingHorizontal: DeviceUiInfo.verticalScale(2),
  },
  rateText: {
    fontFamily: type.rubikSemiBold,
    fontSize: DeviceUiInfo.moderateScale(12),
    color: Colors.white,
  },
});

export default styles;
