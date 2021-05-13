import React from 'react';
import PropTypes from 'prop-types';

const UitAngleDoubleRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7.3534546,8.1465454c-0.1937256-0.1871948-0.5009155-0.1871948-0.6947021,0C6.460144,8.3383789,6.4546509,8.6549072,6.6464844,8.8535156L9.7930298,12l-3.1465454,3.1464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C6.5,15.776062,6.723877,15.999939,7,16c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l3.5-3.5c0.000061-0.000061,0.0001221-0.000061,0.0001831-0.0001221c0.1951294-0.1952515,0.1950684-0.5117188-0.0001831-0.7068481L7.3534546,8.1465454z M16.8534546,11.6465454l-3.5-3.5c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702L15.7930298,12l-3.1465454,3.1464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C12.5,15.776062,12.723877,15.999939,13,16c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l3.5-3.5c0.000061-0.000061,0.0001221-0.000061,0.0001831-0.0001221C17.0487671,12.1581421,17.0487061,11.8416748,16.8534546,11.6465454z'
  }));
};

UitAngleDoubleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitAngleDoubleRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitAngleDoubleRight;