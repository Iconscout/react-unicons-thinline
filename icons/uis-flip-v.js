import React from 'react';
import PropTypes from 'prop-types';

const UisFlipV = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1V3C13,2.4,12.6,2,12,2z M21.7,11.3l-5-5C16.5,6.1,16.3,6,16,6c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l5-5C22.1,12.3,22.1,11.7,21.7,11.3z M3.8,9.8l-1.1,1.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0-0.2,0.1-0.3,0.2c-0.4,0.4-0.4,1,0,1.4l1.1,1.1c0.2,0.2,0.4,0.3,0.7,0.3h0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L4.4,12l0.8-0.8c0.4-0.4,0.4-1,0-1.4S4.2,9.4,3.8,9.8z M7.6,15.2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l1.1,1.1C7.4,17.8,7.7,18,7.9,18l0,0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.6,15.2z M7.3,6.3L6.6,7C6.4,7.1,6.3,7.4,6.3,7.7c0,0.6,0.4,1,1,1c0.2,0,0.3,0,0.5-0.1c0.1,0,0.1,0,0.2,0c0.6,0,1-0.4,1-1V7c0-0.3-0.1-0.5-0.3-0.7C8.3,5.9,7.7,5.9,7.3,6.3z M8,10.6c-0.6,0-1,0.4-1,1v1.5c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-1.5C9,11,8.6,10.6,8,10.6z'
  }));
};

UisFlipV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisFlipV.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisFlipV;