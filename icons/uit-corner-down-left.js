import React from 'react';
import PropTypes from 'prop-types';

const UitCornerDownLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.5,3C18.223877,3,18,3.223877,18,3.5v10c-0.0012817,1.380188-1.119812,2.4987183-2.5,2.5H6.7069702l3.6464844-3.6464844c0.1871338-0.1937866,0.1871338-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-4.4996338,4.4996338c-0.0462646,0.0461426-0.0828857,0.1014404-0.1082764,0.1627808c-0.0248413,0.0601196-0.0375366,0.1239014-0.0379639,0.1879272C5.0006104,16.4979858,5,16.4989014,5,16.5v0.000061c0,0.0651245,0.0132446,0.1300049,0.0385742,0.1911011s0.0618286,0.116333,0.1079102,0.1623535l4.5,4.5C9.7401123,21.4474487,9.8673706,21.5001831,10,21.5c0.1325684,0,0.2597046-0.0526733,0.3533936-0.1464233c0.1953125-0.1952515,0.1953125-0.5118408,0.0001221-0.7070923L6.7069702,17H15.5c1.9320068-0.0023193,3.4976807-1.5679932,3.5-3.5v-10C19,3.223877,18.776123,3,18.5,3z'
  }));
};

UitCornerDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitCornerDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitCornerDownLeft;