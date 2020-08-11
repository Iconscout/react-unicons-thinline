import React from 'react';
import PropTypes from 'prop-types';

const UisSanitizer = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.8,7.6L16,5.5V3h1c0.6,0,1-0.4,1-1s-0.4-1-1-1H8.7C7.3,1,6.1,1.5,5.1,2.5L4.3,3.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0l0.8-0.8C7.1,3.3,7.9,3,8.7,3H10v2.5L7.2,7.6C6.4,8.2,6,9.1,6,10v12c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V10C20,9.1,19.6,8.2,18.8,7.6z M12,3h2v2h-2V3z M13,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2C15,16.1,14.1,17,13,17z'
  }));
};

UisSanitizer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisSanitizer.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisSanitizer;