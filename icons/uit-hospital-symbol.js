import React from 'react';
import PropTypes from 'prop-types';

const UitHospitalSymbol = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15,7.5c-0.3,0-0.5,0.2-0.5,0.5v3.5h-5V8c0-0.3-0.2-0.5-0.5-0.5S8.5,7.7,8.5,8v8c0,0.3,0.2,0.5,0.5,0.5h0c0.3,0,0.5-0.2,0.5-0.5v-3.5h5V16c0,0.3,0.2,0.5,0.5,0.5h0c0.3,0,0.5-0.2,0.5-0.5V8C15.5,7.7,15.3,7.5,15,7.5z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10C22,6.5,17.5,2,12,2z M12,21c-5,0-9-4-9-9s4-9,9-9c5,0,9,4,9,9C21,17,17,21,12,21z'
  }));
};

UitHospitalSymbol.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitHospitalSymbol.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitHospitalSymbol;