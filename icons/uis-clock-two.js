import React from 'react';
import PropTypes from 'prop-types';

const UisClockTwo = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.1,11.4l-2.6,1.5c-0.5,0.3-1.1,0.1-1.4-0.4C11,12.3,11,12.2,11,12V7c0-0.6,0.4-1,1-1s1,0.4,1,1v3.3l1.1-0.6c0.5-0.3,1.1-0.1,1.4,0.4S15.6,11.1,15.1,11.4z'
  }));
};

UisClockTwo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisClockTwo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisClockTwo;