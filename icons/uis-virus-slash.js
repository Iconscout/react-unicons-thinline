import React from 'react';
import PropTypes from 'prop-types';

const UisVirusSlash = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19.8,18.4C19.8,18.4,19.8,18.4,19.8,18.4l-4-4c0,0,0,0,0,0l-2.1-2.1l0,0l-8-8c0,0,0,0,0,0L2.7,1.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L5,6.4C3.9,7.7,3.2,9.3,3.1,11H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.1c0.2,1.7,0.9,3.3,1.9,4.6l-0.8,0.8c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0L6.4,19c1.3,1.1,2.9,1.7,4.6,1.9V22c0,0.6,0.4,1,1,1s1-0.4,1-1v-1.1c1.7-0.2,3.3-0.9,4.6-1.9l3.7,3.7c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L19.8,18.4z M9,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S9.6,16,9,16z M9.5,12C8.7,12,8,11.3,8,10.5c0-0.3,0.1-0.6,0.3-0.8l2.1,2.1C10.1,11.9,9.8,12,9.5,12z M20.9,13H22c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1.1c-0.2-1.7-0.9-3.3-1.9-4.6l0.8-0.8c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L17.6,5c-1.3-1.1-2.9-1.7-4.6-1.9V2c0-0.6-0.4-1-1-1s-1,0.4-1,1v1.1c-1,0.1-2,0.4-2.9,0.8l12,12C20.5,15,20.8,14,20.9,13z M15,10c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,10,15,10z'
  }));
};

UisVirusSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisVirusSlash.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisVirusSlash;