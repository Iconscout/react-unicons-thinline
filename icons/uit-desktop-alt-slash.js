import React from 'react';
import PropTypes from 'prop-types';

const UitDesktopAltSlash = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7.8,4h10.7C19.3,4,20,4.7,20,5.5V12h-3.2c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H20v1.5c0,0.4-0.1,0.7-0.3,1c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.3,0.2,0.5,0.5,0.5c0.1,0,0.3-0.1,0.4-0.2c0.4-0.4,0.6-1,0.6-1.6v-9C21,4.1,19.9,3,18.5,3H7.8C7.5,3,7.3,3.2,7.3,3.5S7.5,4,7.8,4z M21.9,21.1l-5-5c0,0,0,0,0,0l-4-4c0,0,0,0,0,0L4.5,3.8c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0L2.9,2.1C2.7,2,2.4,2,2.2,2.1C2,2.3,2,2.7,2.1,2.9l1.3,1.3C3.1,4.5,3,5,3,5.5v9C3,15.9,4.1,17,5.5,17H9v3H5.5C5.2,20,5,20.2,5,20.5S5.2,21,5.5,21h4h0h5h0h4c0.3,0,0.5-0.2,0.5-0.5S18.8,20,18.5,20H15v-3h1.3l4.9,4.9c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3-0.1,0.4-0.1C22,21.7,22,21.3,21.9,21.1z M4,5.5c0-0.2,0.1-0.4,0.2-0.6l7.1,7.1H4V5.5z M14,20h-4v-3h4V20z M5.5,16C4.7,16,4,15.3,4,14.5V13h8.3l3,3H5.5z'
  }));
};

UitDesktopAltSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitDesktopAltSlash.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitDesktopAltSlash;