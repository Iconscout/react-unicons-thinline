import React from 'react';
import PropTypes from 'prop-types';

const UisRedo = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,11c-0.6,0-1,0.4-1,1c0,2.9-1.5,5.5-4,6.9c-3.8,2.2-8.7,0.9-10.9-2.9C2.9,12.2,4.2,7.3,8,5.1c3.3-1.9,7.3-1.2,9.8,1.4h-2.4c-0.6,0-1,0.4-1,1s0.4,1,1,1h4.5c0.6,0,1-0.4,1-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1.8C17,3,14.6,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10C22,11.4,21.6,11,21,11z'
  }));
};

UisRedo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisRedo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisRedo;