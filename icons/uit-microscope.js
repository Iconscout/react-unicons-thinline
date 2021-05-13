import React from 'react';
import PropTypes from 'prop-types';

const UitMicroscope = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.5,22H14c0.3-0.4,0.5-0.9,0.5-1.5c0,0,0,0,0-0.1c1.2-0.5,2.4-1.2,3.3-2.2c3-3.3,2.9-8.4-0.2-11.6l0.5-0.5C18.2,6,18.3,6,18.3,5.9L19,3.8c0.1-0.2,0-0.4-0.1-0.5l-2.1-2.1C16.6,1,16.4,1,16.2,1l-2.1,0.7c-0.1,0-0.1,0.1-0.2,0.1L7.6,8.2c0,0,0,0,0,0c-0.2,0.2-0.2,0.5,0,0.7l0.4,0.4L6.1,11c0,0,0,0,0,0c-0.2,0.2-0.2,0.5,0,0.7l2.1,2.1C8.4,14,8.5,14,8.6,14C8.7,14,8.9,14,9,13.9l1.8-1.8l0.4,0.4c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3-0.1,0.4-0.1l5.1-5.1c0.8,0.8,1.4,1.8,1.7,2.9c1.2,3.8-0.7,7.8-4.4,9.2C13.9,18.6,13,18,12,18c-1.1,0-2.1,0.7-2.4,1.8c-1.2-0.3-2.3-0.9-3.2-1.8h1.1C7.8,18,8,17.8,8,17.5S7.8,17,7.5,17h-4C3.2,17,3,17.2,3,17.5S3.2,18,3.5,18H5c1.2,1.4,2.7,2.3,4.5,2.8c0,0.5,0.2,0.9,0.5,1.2H3.5C3.2,22,3,22.2,3,22.5S3.2,23,3.5,23h17c0.3,0,0.5-0.2,0.5-0.5S20.8,22,20.5,22z M8.6,12.8l-1.4-1.4L8.6,10l1.4,1.4L8.6,12.8z M16.6,6.3C16.6,6.3,16.5,6.3,16.6,6.3C16.5,6.3,16.5,6.3,16.6,6.3l-5.1,5.1L8.6,8.6l5.9-5.9l1.7-0.6l1.7,1.7l-0.6,1.7L16.6,6.3z M12,22c-0.8,0-1.5-0.7-1.5-1.5S11.2,19,12,19c0.8,0,1.5,0.7,1.5,1.5C13.5,21.3,12.8,22,12,22z'
  }));
};

UitMicroscope.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitMicroscope.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitMicroscope;