import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import sampleIconConfig from '@theme/sample.json';
import {Platform} from 'react-native';
// import PropTypes from 'prop-types';

const Sample = createIconSetFromIcoMoon(
  sampleIconConfig,
  Platform.OS === 'android' ? 'sample' : '',
  Platform.OS === 'android' ? 'sample.ttf' : '',
);
const CustomIcon = props => {
  if (props.type === 'sample') {
    return <Sample {...props} />;
  }
};

// CustomIcon.propTypes = {
//   type: PropTypes.string,
// };

export default CustomIcon;
