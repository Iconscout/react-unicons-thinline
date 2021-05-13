import React from 'react';
import PropTypes from 'prop-types';

const UitAngleUp = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16.8535156,13.6465454l-4.5-4.5c-0.000061-0.000061-0.000061-0.0001221-0.0001221-0.0001831c-0.1952515-0.1951294-0.5117188-0.1950684-0.7068481,0.0001831l-4.5,4.5c-0.1871948,0.1937256-0.1871948,0.5009155,0,0.6947021c0.1918335,0.1986084,0.5083618,0.2041016,0.7069702,0.0122681L12,10.2069702l4.1464844,4.1465454C16.2401123,14.4474487,16.3673706,14.5001831,16.5,14.5c0.1325073,0,0.2596436-0.0526733,0.3533936-0.1463623C17.048645,14.1583862,17.0487671,13.8417969,16.8535156,13.6465454z'
  }));
};

UitAngleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitAngleUp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitAngleUp;