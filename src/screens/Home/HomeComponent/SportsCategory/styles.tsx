// HomeScreenStyles.ts
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@theme';
import DeviceUiInfo from '@utils/DeviceUiInfo';

const {size, type} = Fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  horizontalItem: {
    padding: DeviceUiInfo.moderateScale(5),
    margin: DeviceUiInfo.moderateScale(5),
    backgroundColor: Colors.lightGray,
    borderRadius: DeviceUiInfo.moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  subIcon: {
    fontSize: size.f24,
    color: Colors.green,
  },
  imageContainer: {
    marginLeft: DeviceUiInfo.moderateScale(25),
    backgroundColor: 'red',
  },
  imageStyle: {
    height: DeviceUiInfo.moderateScale(55),
    width: DeviceUiInfo.moderateScale(55),
  },
  titleText: {
    fontSize: size.f15,
    color: Colors.secondary,
    fontFamily: type.rubikMedium,
  },
  subTitle: {
    fontSize: size.f12,
    color: Colors.whiteGreenColor,
    fontFamily: type.rubikMedium,
  },
  realTimeText: {
    fontSize: size.f10,
    color: Colors.green,
    fontFamily: type.rubikMedium,
    marginLeft: DeviceUiInfo.moderateScale(15),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DeviceUiInfo.moderateScale(8),
  },
});

export default styles;
