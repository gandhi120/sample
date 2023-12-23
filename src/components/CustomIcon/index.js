import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import sampleIconConfig from '@theme/sample.json';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';

const Sample = createIconSetFromIcoMoon(
  sampleIconConfig,
  Platform.OS === 'android' ? 'sample' : '',
  Platform.OS === 'android' ? 'sample.ttf' : '',
);
const CustomIcon = props => {
  if (props.type === 'FontAwesome') {
    return <FontAwesome5 {...props} />;
  } else if (props.type === 'sample') {
    return <Sample {...props} />;
  } else if (props.type === 'MaterialIcons') {
    return <MaterialIcons {...props} />;
  } else {
    return <Ionicons {...props} />;
  }
};

CustomIcon.propTypes = {
  type: PropTypes.string,
};

export default CustomIcon;
