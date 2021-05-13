import React from 'react';
import PropTypes from 'prop-types';

const UitHouseUser = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.8,10.6l-2-1.8c0,0,0,0,0,0l-7.5-6.7c-0.2-0.2-0.5-0.2-0.7,0L4.2,8.8c0,0,0,0,0,0l-2,1.8c0,0,0,0,0,0c-0.2,0.2-0.2,0.5,0,0.7c0.2,0.2,0.5,0.2,0.7,0L4,10.3v11.2c0,0,0,0,0,0C4,21.8,4.3,22,4.5,22h14.9c0,0,0,0,0,0c0.3,0,0.5-0.2,0.5-0.5V10.3l1.2,1.1c0.1,0.1,0.2,0.1,0.3,0.1v0c0.1,0,0.3-0.1,0.4-0.2C22.1,11.1,22,10.8,21.8,10.6z M8.1,21c0.4-1.6,1.8-2.8,3.4-3c2-0.2,3.8,1.1,4.3,3H8.1z M9.5,14.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5S9.5,15.9,9.5,14.5z M19,21h-2.1c-0.3-1.6-1.4-3-2.9-3.6c0.9-0.6,1.6-1.7,1.6-2.9c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2,0.6,2.3,1.6,2.9C8.6,18,7.5,19.3,7.1,21H5V9.4l7-6.2l7,6.2V21z'
  }));
};

UitHouseUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitHouseUser.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitHouseUser;