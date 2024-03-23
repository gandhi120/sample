import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts} from '@theme';
const {type} = Fonts;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headerTitleText: {
    fontFamily: type.rubikRegular,
    fontSize: DeviceUiInfo.moderateScale(18),
    color: Colors.white,
  },
  likeIconContainer: {
    width: DeviceUiInfo.moderateScale(30),
    height: DeviceUiInfo.moderateScale(20),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  likeIcon: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(15),
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
  outerRoot: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: DeviceUiInfo.verticalScale(10),
    paddingTop: DeviceUiInfo.verticalScale(10),
  },
  priceDetailContainer: {
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: DeviceUiInfo.verticalScale(5),
    marginBottom: DeviceUiInfo.verticalScale(30),
    paddingVertical: DeviceUiInfo.verticalScale(15),
    paddingHorizontal: DeviceUiInfo.verticalScale(15),
  },
  priceDetailText: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(15),
    fontFamily: type.rubikSemiBold,
    marginBottom: DeviceUiInfo.verticalScale(5),
  },
  priceRowContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: DeviceUiInfo.verticalScale(10),
  },
  titleText: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(12),
    fontFamily: type.rubikRegular,
  },
  ansText: {
    color: Colors.white,
    fontSize: DeviceUiInfo.verticalScale(12),
    fontFamily: type.rubikRegular,
  },
  discountText: {
    color: Colors.green,
    fontSize: DeviceUiInfo.verticalScale(15),
    fontFamily: type.rubikRegular,
  },
});
export default styles;
