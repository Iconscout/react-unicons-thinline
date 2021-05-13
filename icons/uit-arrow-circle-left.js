import React from 'react';
import PropTypes from 'prop-types';

const UitArrowCircleLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16.5,11.5H8.7069702l3.6464844-3.6464844c0.1871338-0.1937866,0.1871338-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-4.4996338,4.4996338c-0.0462646,0.0461426-0.0828857,0.1014404-0.1082764,0.1627808c-0.0248413,0.0601196-0.0375366,0.1239014-0.0379639,0.1879272C7.0006104,11.9979858,7,11.9989014,7,12v0.000061c0,0.0651245,0.0132446,0.1300049,0.0385742,0.1911011s0.0618286,0.116333,0.1079102,0.1623535l4.5,4.5C11.7401123,16.9474487,11.8673706,17.0001831,12,17c0.1325684,0,0.2597046-0.0526733,0.3533936-0.1464233c0.1953125-0.1952515,0.1953125-0.5118408,0.0001221-0.7070923L8.7069702,12.5H16.5c0.276123,0,0.5-0.223877,0.5-0.5S16.776123,11.5,16.5,11.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9682617,0.0056152,8.9943848,4.0317383,9,9C21,16.9705811,16.9705811,21,12,21z'
  }));
};

UitArrowCircleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitArrowCircleLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitArrowCircleLeft;