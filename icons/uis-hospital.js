import React from 'react';
import PropTypes from 'prop-types';

const UisHospital = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.5,6.5h-3v-4c0-0.6-0.4-1-1-1h-11c-0.6,0-1,0.4-1,1v4h-3c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1h19c0.6,0,1-0.4,1-1v-14C22.5,6.9,22.1,6.5,21.5,6.5z M7.5,18.5h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1c0.6,0,1,0.4,1,1S8.1,18.5,7.5,18.5z M7.5,14.5h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1c0.6,0,1,0.4,1,1S8.1,14.5,7.5,14.5z M12.5,18.5h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1c0.6,0,1,0.4,1,1S13.1,18.5,12.5,18.5z M12.5,14.5h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1c0.6,0,1,0.4,1,1S13.1,14.5,12.5,14.5z M13.5,9H13v0.5c0,0.6-0.4,1-1,1s-1-0.4-1-1V9h-0.5c-0.6,0-1-0.4-1-1s0.4-1,1-1H11V6.5c0-0.6,0.4-1,1-1s1,0.4,1,1V7h0.5c0.6,0,1,0.4,1,1S14.1,9,13.5,9z M17.5,18.5h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1c0.6,0,1,0.4,1,1S18.1,18.5,17.5,18.5z M17.5,14.5h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1c0.6,0,1,0.4,1,1S18.1,14.5,17.5,14.5z'
  }));
};

UisHospital.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisHospital.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisHospital;