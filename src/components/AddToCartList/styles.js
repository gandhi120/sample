import {StyleSheet} from 'react-native';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Colors, Fonts} from '@theme';
const {type} = Fonts;

const styles = StyleSheet.create({
  likeIconContainer: {
    width: DeviceUiInfo.moderateScale(30),
    height: DeviceUiInfo.moderateScale(20),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  likeIcon: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(15),
    marginRight: DeviceUiInfo.verticalScale(5),
  },
  cart: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: DeviceUiInfo.verticalScale(8),
    marginBottom: DeviceUiInfo.verticalScale(15),
    backgroundColor: Colors.lightWhite,
  },
  bottomCartContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: Colors.black,
    paddingHorizontal: DeviceUiInfo.verticalScale(5),
    paddingVertical: DeviceUiInfo.verticalScale(8),
  },
  wishlistText: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(12),
    fontFamily: type.rubikMedium,
    marginLeft: DeviceUiInfo.verticalScale(2),
  },
  removeText: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(12),
    fontFamily: type.rubikRegular,
    marginLeft: DeviceUiInfo.verticalScale(12),
  },
  productContainer: {
    paddingHorizontal: DeviceUiInfo.verticalScale(12),
    paddingTop: DeviceUiInfo.verticalScale(12),
    paddingBottom: DeviceUiInfo.verticalScale(30),
    flexDirection: 'row',
  },
  productImage: {
    height: DeviceUiInfo.moderateScale(120),
    width: DeviceUiInfo.moderateScale(90),
  },
  productInfoContainer: {
    flex: 1,
    paddingLeft: DeviceUiInfo.moderateScale(9),
  },
  productTitle: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(11),
    fontFamily: type.rubikRegular,
    marginBottom: DeviceUiInfo.verticalScale(2),
  },
  productPriceText: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(10),
    fontFamily: type.rubikMedium,
    marginBottom: DeviceUiInfo.verticalScale(2),
  },
  sizeQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectSizeContainer: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: DeviceUiInfo.verticalScale(4),
    width: DeviceUiInfo.verticalScale(50),
    paddingVertical: DeviceUiInfo.verticalScale(2),
    paddingHorizontal: DeviceUiInfo.verticalScale(5),
    marginTop: DeviceUiInfo.verticalScale(5),
    marginRight: DeviceUiInfo.verticalScale(10),
  },
  sizeIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sizeNumberText: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(10),
    fontFamily: type.rubikMedium,
  },
  downArrowIcon: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(12),
  },
  emptyContainer: {
    borderWidth: 0.5,
    borderColor: Colors.black,
    marginHorizontal: DeviceUiInfo.verticalScale(12),
  },
  deliveryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: DeviceUiInfo.verticalScale(12),
    paddingVertical: DeviceUiInfo.verticalScale(8),
  },
  deliveryText: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(10),
    fontFamily: type.rubikRegular,
  },
  deliveryDateText: {
    color: Colors.black,
    fontSize: DeviceUiInfo.verticalScale(10),
    fontFamily: type.rubikMedium,
  },
});
export default styles;
