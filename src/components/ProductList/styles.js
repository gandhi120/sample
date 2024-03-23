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
    height: DeviceUiInfo.moderateScale(210),
    width: '100%',
    // flex: 1,
    resizeMode: 'center',
    borderRadius: DeviceUiInfo.moderateScale(20),
  },
  wishListImageContainer: {
    width: '100%',
    height: DeviceUiInfo.moderateScale(220),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    // borderRadius: DeviceUiInfo.moderateScale(20),
    borderTopLeftRadius: DeviceUiInfo.moderateScale(20),
    borderTopRightRadius: DeviceUiInfo.moderateScale(20),
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: DeviceUiInfo.moderateScale(220),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: DeviceUiInfo.moderateScale(20),
    // borderTopLeftRadius: DeviceUiInfo.moderateScale(20),
    // borderTopRightRadius: DeviceUiInfo.moderateScale(20),
    overflow: 'hidden',
  },
  infoContainer: {
    backgroundColor: 'black',
    flex: 1,
    width: '100%',
    paddingVertical: DeviceUiInfo.moderateScale(8),
    paddingLeft: DeviceUiInfo.moderateScale(6),
    paddingRight: DeviceUiInfo.moderateScale(10),
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
    width: DeviceUiInfo.verticalScale(screenWidth / 6),
    height: DeviceUiInfo.verticalScale(20),
    borderRadius: DeviceUiInfo.verticalScale(20),
    paddingHorizontal: DeviceUiInfo.verticalScale(3),
  },
  rateText: {
    fontFamily: type.rubikSemiBold,
    fontSize: DeviceUiInfo.moderateScale(12),
    color: Colors.white,
  },
  star: {
    fontFamily: type.rubikSemiBold,
    fontSize: DeviceUiInfo.moderateScale(12),
    color: Colors.white,
    marginRight: DeviceUiInfo.moderateScale(12),
  },
  mainContainer: {
    backgroundColor: Colors.lightGray,
    marginBottom: DeviceUiInfo.moderateScale(15),
    width: (screenWidth - 39) / 2,
    borderRadius: DeviceUiInfo.moderateScale(4),
  },
  titleText: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(13),
    color: Colors.black,
    marginTop: DeviceUiInfo.moderateScale(10),
  },
  subTitle: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(12),
    color: Colors.text,
    marginTop: DeviceUiInfo.moderateScale(5),
  },

  price: {
    fontFamily: type.rubikMedium,
    fontSize: DeviceUiInfo.moderateScale(12),
    color: Colors.black,
    marginTop: DeviceUiInfo.moderateScale(7),
  },
  addToBagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingVertical: DeviceUiInfo.moderateScale(7),
    flex: 1,
    height: DeviceUiInfo.moderateScale(30),
    borderBottomLeftRadius: DeviceUiInfo.moderateScale(20),
    borderBottomRightRadius: DeviceUiInfo.moderateScale(20),
  },
});

export default styles;
