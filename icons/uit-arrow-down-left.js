import React from 'react';
import PropTypes from 'prop-types';

const UitArrowDownLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17.4521484,16.9042969H7.8666992l9.9711914-9.9711914c0.2130127-0.2130127,0.2130737-0.5584106,0-0.7714844c-0.2130127-0.2130127-0.5584106-0.2130127-0.7714844,0l-9.9707031,9.9707031V6.5478516C7.0957031,6.2453003,6.8504028,6,6.5478516,6S6,6.2453003,6,6.5478516v10.9042969c0,0.0001221,0,0.0003052,0,0.0004272C6.0001221,17.7550049,6.2454224,18.0001221,6.5478516,18h10.9042969c0.302063-0.0003662,0.546875-0.2451172,0.5472412-0.5472412C17.9996948,17.1502075,17.7546997,16.9046631,17.4521484,16.9042969z'
  }));
};

UitArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitArrowDownLeft;