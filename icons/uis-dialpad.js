import React from 'react';
import PropTypes from 'prop-types';

const UisDialpad = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M14,9.2h-4c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8v-4C14.8,9.6,14.4,9.2,14,9.2z M14,16.2h-4c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8v-4C14.8,16.6,14.4,16.2,14,16.2z M7,2.2H3C2.6,2.2,2.2,2.6,2.2,3v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8V3C7.8,2.6,7.4,2.2,7,2.2z M7,9.2H3c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8v-4C7.8,9.6,7.4,9.2,7,9.2z M21,2.2h-4c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8V3C21.8,2.6,21.4,2.2,21,2.2z M14,2.2h-4C9.6,2.2,9.2,2.6,9.2,3v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8V3C14.8,2.6,14.4,2.2,14,2.2z M21,9.2h-4c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8v-4C21.8,9.6,21.4,9.2,21,9.2z'
  }));
};

UisDialpad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisDialpad.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisDialpad;