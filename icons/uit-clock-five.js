import React from 'react';
import PropTypes from 'prop-types';

const UitClockFive = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12.5,11.8740234V7c0-0.276123-0.223877-0.5-0.5-0.5S11.5,6.723877,11.5,7v5c0.0001221,0.0824585,0.0206299,0.1636353,0.0595703,0.2363281l1.5,2.7988281c0.0869751,0.1623535,0.2562256,0.2637329,0.4404297,0.2636719c0.0825195,0.0003052,0.1638184-0.0202026,0.2363281-0.0595703c0.0002441-0.0001221,0.0004272-0.0002441,0.0006714-0.0003662c0.2429199-0.1306152,0.3340454-0.4334717,0.2034302-0.6763916L12.5,11.8740234z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z'
  }));
};

UitClockFive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitClockFive.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitClockFive;