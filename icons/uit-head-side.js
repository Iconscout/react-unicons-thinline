import React from 'react';
import PropTypes from 'prop-types';

const UitHeadSide = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.5,9.4c0-4-3.2-7.3-7.2-7.4C9.2,1.9,5.8,5.2,5.7,9.2l-2.2,4.5c0,0.1,0,0.1,0,0.2c0,0.3,0.2,0.5,0.5,0.5h2V17c0,1.1,0.9,2,2,2h1v2.5c0,0,0,0,0,0C9,21.8,9.2,22,9.5,22c0,0,0,0,0,0c0.3,0,0.5-0.2,0.5-0.5V19h0.5c0.3,0,0.5-0.2,0.5-0.5S10.8,18,10.5,18H8c-0.6,0-1-0.4-1-1v-3c0,0,0,0,0,0c0-0.3-0.2-0.5-0.5-0.5H4.8l1.9-3.9c0-0.1,0.1-0.1,0-0.2C6.7,5.9,9.5,3,13,3c3.5,0,6.4,2.8,6.5,6.3l-2.1,7.9c0,0.1,0,0.2,0,0.3l1.1,4.2c0.1,0.2,0.3,0.4,0.5,0.4c0,0,0.1,0,0.1,0c0.3-0.1,0.4-0.3,0.4-0.6l-1-4.1l2.1-7.8C20.5,9.5,20.5,9.4,20.5,9.4z'
  }));
};

UitHeadSide.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitHeadSide.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitHeadSide;