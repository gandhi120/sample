import {StyleSheet} from 'react-native';
import Colors from '@theme/colors';
import DeviceUiInfo from '@utils/DeviceUiInfo';
import {Fonts} from '@theme';
const {type} = Fonts;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.lightBlack,
    padding: DeviceUiInfo.verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerTitleText: {
    fontSize: DeviceUiInfo.moderateScale(20),
    color: Colors.secondary,
    fontFamily: type.rubikSemiBold,
    marginBottom: DeviceUiInfo.moderateScale(10),
  },
  headerSubTitleText: {
    fontSize: DeviceUiInfo.moderateScale(13),
    color: Colors.secondary,
    fontFamily: type.rubikRegular,
  },
});
export default styles;
