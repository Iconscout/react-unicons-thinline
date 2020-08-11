import React from 'react';
import PropTypes from 'prop-types';

const UisBorderVertical = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11,3c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1V4C12,3.4,11.6,3,11,3z M7,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S7.6,11,7,11z M3,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S3.6,11,3,11z M15,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S15.6,11,15,11z M19,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,11,19,11z M7,3C6.4,3,6,3.4,6,4s0.4,1,1,1s1-0.4,1-1S7.6,3,7,3z M3,3C2.4,3,2,3.4,2,4s0.4,1,1,1s1-0.4,1-1S3.6,3,3,3z M15,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S15.6,3,15,3z M19,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S18.4,5,19,5z M19,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,7,19,7z M19,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,15,19,15z M3,7C2.4,7,2,7.4,2,8s0.4,1,1,1s1-0.4,1-1S3.6,7,3,7z M3,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S3.6,15,3,15z M7,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S7.6,19,7,19z M3,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S3.6,19,3,19z M15,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S15.6,19,15,19z M19,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,19,19,19z'
  }));
};

UisBorderVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisBorderVertical.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisBorderVertical;