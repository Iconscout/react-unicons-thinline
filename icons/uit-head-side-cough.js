import React from 'react';
import PropTypes from 'prop-types';

const UitHeadSideCough = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M5,20.4c-0.3,0-0.6,0.3-0.6,0.6s0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6S5.3,20.4,5,20.4z M23,9c0-3.8-3.1-6.9-6.9-7C12.3,1.9,9.1,5,9,8.9l-2.1,4.4c0,0.1,0,0.1,0,0.2c0,0.3,0.2,0.5,0.5,0.5H9v2c0,1.1,0.9,2,2,2h1v2.5c0,0.3,0.2,0.5,0.5,0.5h0c0.3,0,0.5-0.2,0.5-0.5V18h0.5c0.3,0,0.5-0.2,0.5-0.5S13.8,17,13.5,17H11c-0.6,0-1-0.4-1-1v-2.5c0-0.3-0.2-0.5-0.5-0.5H8.2L10,9.2c0-0.1,0-0.1,0-0.2c0-3.3,2.6-6,5.9-6c3.3,0,6,2.6,6.1,5.9l-2,7.4c0,0.1,0,0.2,0,0.2l1,4c0.1,0.2,0.3,0.4,0.5,0.4c0,0,0.1,0,0.1,0c0.3-0.1,0.4-0.3,0.4-0.6l-1-3.9l2-7.4C23,9.1,23,9,23,9z M2,17.4c-0.3,0-0.6,0.3-0.6,0.6s0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6S2.3,17.4,2,17.4z M6,16.4c-0.3,0-0.6,0.3-0.6,0.6s0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6S6.3,16.4,6,16.4z'
  }));
};

UitHeadSideCough.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitHeadSideCough.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitHeadSideCough;