import React from 'react';
import PropTypes from 'prop-types';

const UitStoreSlash = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7.8,4h10.9l1.8,4.6c0,1.3-1.1,2.4-2.5,2.4c-1.4,0-2.5-1.1-2.5-2.5C15.5,8.2,15.3,8,15,8s-0.5,0.2-0.5,0.5c0,0.5-0.2,1-0.4,1.4C14,10,14,10.1,14,10.2c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.1,0.1-0.2c0.6,1,1.7,1.7,3,1.7c0.3,0,0.7-0.1,1-0.2v3.4c0,0,0,0,0,0c0,0.3,0.2,0.5,0.5,0.5c0,0,0,0,0,0c0.3,0,0.5-0.2,0.5-0.5v-3.9c0.9-0.6,1.5-1.7,1.5-2.9c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1l0,0c0,0,0,0,0,0l-2-5C19.4,3.1,19.2,3,19,3H7.8C7.5,3,7.2,3.2,7.2,3.5S7.5,4,7.8,4z M22.9,22.1l-3-3c0,0,0,0,0,0l-5-5c0,0,0,0,0,0l-13-13C1.7,1,1.4,1,1.2,1.1C1,1.3,1,1.7,1.1,1.9L4,4.7L2.5,8.3c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,1.2,0.6,2.2,1.5,2.9v10.1c0,0,0,0,0,0C4,21.8,4.2,22,4.5,22h10h0h5c0,0,0,0,0,0c0.3,0,0.5-0.2,0.5-0.5v-0.8l2.1,2.1c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3-0.1,0.4-0.1C23,22.7,23,22.3,22.9,22.1z M3.5,8.6l1.2-3.1l3.7,3.7C8.1,10.2,7.1,11,6,11C4.6,11,3.5,9.9,3.5,8.6z M9.5,14C9.2,14,9,14.2,9,14.5V21H5v-9.2C5.3,11.9,5.7,12,6,12c1.3,0,2.4-0.7,3-1.7c0.5,0.8,1.3,1.4,2.2,1.6l2.1,2.1H9.5C9.5,14,9.5,14,9.5,14z M14,21h-4v-6h4V21z M19,21h-4v-5.3l4,4V21z'
  }));
};

UitStoreSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitStoreSlash.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitStoreSlash;