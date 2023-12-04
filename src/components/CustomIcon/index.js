import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import sampleIconConfig from '@theme/sample.json';
// import PropTypes from 'prop-types';

// const CustomIcon = props => {
//   if (props.type === 'sample') {
//     return <Sample {...props} />;
//   }
// };

// CustomIcon.propTypes = {
//   type: PropTypes.string,
// };

export default createIconSetFromIcoMoon(
  sampleIconConfig,
  'sample',
  'sample.ttf',
);
