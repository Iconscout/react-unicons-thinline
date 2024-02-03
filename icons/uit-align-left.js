import React from 'react';
import PropTypes from 'prop-types';

const UitAlignLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M2.5,7h19C21.776123,7,22,6.776123,22,6.5S21.776123,6,21.5,6h-19C2.223877,6,2,6.223877,2,6.5S2.223877,7,2.5,7z M2.5,11h15c0.276123,0,0.5-0.223877,0.5-0.5S17.776123,10,17.5,10h-15C2.223877,10,2,10.223877,2,10.5S2.223877,11,2.5,11z M17.5,18h-15C2.223877,18,2,18.223877,2,18.5S2.223877,19,2.5,19h15c0.276123,0,0.5-0.223877,0.5-0.5S17.776123,18,17.5,18z M21.5,14h-19C2.223877,14,2,14.223877,2,14.5S2.223877,15,2.5,15h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,14,21.5,14z'
  }));
};

UitAlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitAlignLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitAlignLeft;