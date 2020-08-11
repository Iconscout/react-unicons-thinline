import React from 'react';
import PropTypes from 'prop-types';

const UisBorderClear = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,15,12,15z M12,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,19,12,19z M12,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,7,12,7z M12,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,3,12,3z M4,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,15,4,15z M4,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,19,4,19z M4,7C3.4,7,3,7.4,3,8s0.4,1,1,1s1-0.4,1-1S4.6,7,4,7z M4,3C3.4,3,3,3.4,3,4s0.4,1,1,1s1-0.4,1-1S4.6,3,4,3z M8,3C7.4,3,7,3.4,7,4s0.4,1,1,1s1-0.4,1-1S8.6,3,8,3z M16,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,3,16,3z M8,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.6,19,8,19z M16,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,19,16,19z M8,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.6,11,8,11z M16,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,11,16,11z M20,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,15,20,15z M20,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,19,20,19z M20,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,7,20,7z M12,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,11,12,11z M4,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,11,4,11z M20,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,11,20,11z M20,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S19.4,5,20,5z'
  }));
};

UisBorderClear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisBorderClear.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisBorderClear;