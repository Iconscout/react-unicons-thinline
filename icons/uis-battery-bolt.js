import React from 'react';
import PropTypes from 'prop-types';

const UisBatteryBolt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,7H4C2.9,7,2,7.9,2,9v6c0,1.1,0.9,2,2,2h6.7c-0.6,0-1-0.4-1-1c0-0.2,0-0.3,0.1-0.5l1.4-2.5H8l0,0l0,0c-0.1,0-0.2,0-0.3-0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0-0.1,0.1-0.3,0.1-0.4c0,0,0,0,0-0.1l2.3-4c0.3-0.5,0.9-0.6,1.4-0.4c0.5,0.3,0.6,0.9,0.4,1.4c0,0,0,0,0,0L9.7,11H13c0,0,0,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1c0,0,0,0,0.1,0c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1-0.1,0.3-0.1,0.4c0,0,0,0,0,0.1l-2.3,4C11.4,16.8,11,17,10.7,17H17c1.1,0,2-0.9,2-2V9C19,7.9,18.1,7,17,7z M21,10c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2C22,10.4,21.6,10,21,10z'
  }));
};

UisBatteryBolt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisBatteryBolt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisBatteryBolt;