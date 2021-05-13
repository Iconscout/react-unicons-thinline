import React from 'react';
import PropTypes from 'prop-types';

const UitArrowDownRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17.4527588,6.0006104c-0.3025513-0.0003052-0.5480957,0.2446899-0.5484619,0.5472412v9.5848999L6.9335938,6.1616211c-0.2130737-0.2130127-0.5584717-0.2130127-0.7714844,0c-0.2130127,0.2130737-0.2130127,0.5584717,0,0.7714844l9.9707642,9.9711914h-9.585022c-0.302063,0.0003662-0.546875,0.2451172-0.5472412,0.5472412C6.0003052,17.7540894,6.2453003,17.9996338,6.5478516,18h10.9042969c0.0001221,0,0.0003052,0,0.0004272,0C17.7550049,17.9998779,18.0001221,17.7545776,18,17.4521484V6.5478516C17.9996338,6.2457886,17.7548828,6.0009766,17.4527588,6.0006104z'
  }));
};

UitArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitArrowDownRight;