import React from 'react';
import PropTypes from 'prop-types';

const UitAlignRightJustify = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.5,20h-11c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h11c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,20,21.5,20z M2.5,5h19C21.776123,5,22,4.776123,22,4.5S21.776123,4,21.5,4h-19C2.223877,4,2,4.223877,2,4.5S2.223877,5,2.5,5z M21.5,12h-19C2.223877,12,2,12.223877,2,12.5S2.223877,13,2.5,13h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,12,21.5,12z M21.5,16h-19C2.223877,16,2,16.223877,2,16.5S2.223877,17,2.5,17h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,16,21.5,16z M21.5,8h-19C2.223877,8,2,8.223877,2,8.5S2.223877,9,2.5,9h19C21.776123,9,22,8.776123,22,8.5S21.776123,8,21.5,8z'
  }));
};

UitAlignRightJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitAlignRightJustify.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitAlignRightJustify;