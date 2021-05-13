import React from 'react';
import PropTypes from 'prop-types';

const UitClockTwo = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M14.3476562,10.0673828L12.5,11.1337891V7c0-0.276123-0.223877-0.5-0.5-0.5S11.5,6.723877,11.5,7v5c0.0004883,0.2759399,0.2240601,0.4995117,0.5,0.5c0.0878296,0,0.1740723-0.0232544,0.25-0.0673828l2.5976562-1.5c0.2389526-0.1380615,0.3206787-0.4436646,0.1826172-0.6826172S14.5866089,9.9293213,14.3476562,10.0673828z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z'
  }));
};

UitClockTwo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitClockTwo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitClockTwo;