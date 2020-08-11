import React from 'react';
import PropTypes from 'prop-types';

const UisUserNurse = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16.2,12.9C16.2,12.9,16.1,12.9,16.2,12.9c-0.2-0.1-0.3-0.2-0.5-0.2c2.6-2,3.1-5.8,1-8.4s-5.8-3.1-8.4-1s-3.1,5.8-1,8.4c0.3,0.4,0.6,0.7,1,1c-0.1,0.1-0.3,0.1-0.4,0.2c0,0,0,0-0.1,0c-3.2,1.5-5.4,4.5-5.8,8C2,21.4,2.4,21.9,3,22H21c0.5-0.1,0.9-0.6,0.9-1.1C21.6,17.4,19.4,14.4,16.2,12.9z M8,7.6c0.2-2.2,2.2-3.8,4.3-3.6c1.9,0.2,3.4,1.7,3.6,3.6H8z M12,16.2l-1.9-1.9c1.3-0.3,2.6-0.3,3.9,0L12,16.2z'
  }));
};

UisUserNurse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisUserNurse.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisUserNurse;