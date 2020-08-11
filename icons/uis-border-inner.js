import React from 'react';
import PropTypes from 'prop-types';

const UisBorderInner = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,12c0-0.6-0.4-1-1-1h-7V4c0-0.6-0.4-1-1-1s-1,0.4-1,1v7H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h7v7c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-7h7C20.5,13,21,12.6,21,12z M4,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.5,15,4,15z M4,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.5,19,4,19z M4,9c0.6,0,1-0.4,1-1S4.5,7,4,7S3,7.4,3,8S3.4,9,4,9z M4,5c0.6,0,1-0.4,1-1S4.5,3,4,3S3,3.4,3,4S3.4,5,4,5z M8,5c0.6,0,1-0.4,1-1S8.5,3,8,3S7,3.4,7,4S7.4,5,8,5z M16,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S15.4,5,16,5z M8,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.5,19,8,19z M16,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.5,19,16,19z M20,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.5,15,20,15z M20,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.5,19,20,19z M20,9c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S19.4,9,20,9z M20,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S19.4,5,20,5z'
  }));
};

UisBorderInner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisBorderInner.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisBorderInner;