import React from 'react';
import PropTypes from 'prop-types';

const UitShieldPlus = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M14.5,11.5h-2v-2C12.5,9.2,12.3,9,12,9s-0.5,0.2-0.5,0.5v2h-2C9.2,11.5,9,11.7,9,12s0.2,0.5,0.5,0.5h2v2c0,0,0,0,0,0c0,0.3,0.2,0.5,0.5,0.5c0,0,0,0,0,0c0.3,0,0.5-0.2,0.5-0.5v-2h2c0.3,0,0.5-0.2,0.5-0.5S14.8,11.5,14.5,11.5z M20,3.8c-0.1-0.3-0.3-0.4-0.6-0.4c-2.5,0.5-5,0-7.1-1.5c-0.2-0.1-0.4-0.1-0.6,0c-2.1,1.4-4.6,2-7.1,1.5c0,0-0.1,0-0.1,0C4.2,3.4,4,3.6,4,3.9v8c0,2.9,1.4,5.7,3.8,7.4l3.9,2.8c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1l3.9-2.8c2.4-1.7,3.8-4.5,3.8-7.4v-8C20,3.8,20,3.8,20,3.8z M19,11.9c0,2.6-1.3,5.1-3.4,6.6L12,21.1l-3.6-2.6c-2.1-1.5-3.4-4-3.4-6.6V4.5c2.4,0.4,4.9-0.2,7-1.5c2.1,1.3,4.6,1.9,7,1.5V11.9z'
  }));
};

UitShieldPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitShieldPlus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitShieldPlus;