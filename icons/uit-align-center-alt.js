import React from 'react';
import PropTypes from 'prop-types';

const UitAlignCenterAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M4.5,7h15C19.776123,7,20,6.776123,20,6.5S19.776123,6,19.5,6h-15C4.223877,6,4,6.223877,4,6.5S4.223877,7,4.5,7z M21.5,11h-19C2.223877,11,2,11.223877,2,11.5S2.223877,12,2.5,12h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,11,21.5,11z M19.5,16h-15C4.223877,16,4,16.223877,4,16.5S4.223877,17,4.5,17h15c0.276123,0,0.5-0.223877,0.5-0.5S19.776123,16,19.5,16z'
  }));
};

UitAlignCenterAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitAlignCenterAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitAlignCenterAlt;