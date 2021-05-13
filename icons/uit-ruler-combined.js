import React from 'react';
import PropTypes from 'prop-types';

const UitRulerCombined = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.5,2H2.4993896C2.2234497,2.0001831,1.9998169,2.223999,2,2.5v19.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h7.0006104C9.7765503,21.9998169,10.0001831,21.776001,10,21.5V10h11.5006104C21.7765503,9.9998169,22.0001831,9.776001,22,9.5V2.4993896C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z M21,9h-3.5V6.5C17.5,6.223877,17.276123,6,17,6s-0.5,0.223877-0.5,0.5V9h-3V6.5C13.5,6.223877,13.276123,6,13,6s-0.5,0.223877-0.5,0.5V9H10V6.5C10,6.223877,9.776123,6,9.5,6S9,6.223877,9,6.5V9H6.5C6.223877,9,6,9.223877,6,9.5S6.223877,10,6.5,10H9v2.5H6.5C6.223877,12.5,6,12.723877,6,13s0.223877,0.5,0.5,0.5H9v3H6.5C6.223877,16.5,6,16.723877,6,17s0.223877,0.5,0.5,0.5H9V21H3V3h18V9z'
  }));
};

UitRulerCombined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitRulerCombined.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitRulerCombined;