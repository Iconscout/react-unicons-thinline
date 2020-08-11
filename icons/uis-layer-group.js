import React from 'react';
import PropTypes from 'prop-types';

const UisLayerGroup = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M2.5,8.9l9,5.2c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1l9-5.2c0.2-0.1,0.3-0.2,0.4-0.4C22.1,8,22,7.4,21.5,7.1l-9-5.2c-0.3-0.2-0.7-0.2-1,0l-9,5.2C2.3,7.2,2.2,7.3,2.1,7.5C1.9,8,2,8.6,2.5,8.9z M21.5,11.1L21.3,11l-8.8,5.1c-0.3,0.2-0.7,0.2-1,0L2.7,11l-0.2,0.1C2,11.4,1.9,12,2.1,12.5c0.1,0.2,0.2,0.3,0.4,0.4l9,5.2c0.3,0.2,0.7,0.2,1,0l9-5.2c0.5-0.3,0.6-0.9,0.4-1.4C21.8,11.3,21.7,11.2,21.5,11.1z M21.5,15.1L21.3,15l-8.8,5.1c-0.3,0.2-0.7,0.2-1,0L2.7,15l-0.2,0.1C2,15.4,1.9,16,2.1,16.5c0.1,0.2,0.2,0.3,0.4,0.4l9,5.2c0.3,0.2,0.7,0.2,1,0l9-5.2c0.5-0.3,0.6-0.9,0.4-1.4C21.8,15.3,21.7,15.2,21.5,15.1z'
  }));
};

UisLayerGroup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisLayerGroup.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisLayerGroup;