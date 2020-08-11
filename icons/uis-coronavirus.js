import React from 'react';
import PropTypes from 'prop-types';

const UisCoronavirus = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M22,11h-1.1c-0.2-1.7-0.9-3.3-1.9-4.6l0.8-0.8c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L17.6,5c-1.3-1.1-2.9-1.7-4.6-1.9V2c0-0.6-0.4-1-1-1s-1,0.4-1,1v1.1C9.3,3.2,7.7,3.9,6.4,5L5.6,4.2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L5,6.4C3.9,7.7,3.2,9.3,3.1,11H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.1c0.2,1.7,0.9,3.3,1.9,4.6l-0.8,0.8c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0L6.4,19c1.3,1.1,2.9,1.7,4.6,1.9V22c0,0.6,0.4,1,1,1s1-0.4,1-1v-1.1c1.7-0.2,3.3-0.9,4.6-1.9l0.8,0.8c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L19,17.6c1.1-1.3,1.7-2.9,1.9-4.6H22c0.6,0,1-0.4,1-1S22.6,11,22,11z M9,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S9.6,16,9,16z M9.5,12C8.7,12,8,11.3,8,10.5S8.7,9,9.5,9S11,9.7,11,10.5S10.3,12,9.5,12z M14.5,15c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S15.3,15,14.5,15z M15,10c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,10,15,10z'
  }));
};

UisCoronavirus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisCoronavirus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisCoronavirus;