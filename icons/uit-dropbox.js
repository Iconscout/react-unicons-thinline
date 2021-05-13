import React from 'react';
import PropTypes from 'prop-types';

const UitDropbox = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.3,12.5l-3.6-3.3l3.6-2.9c0.1,0,0.1-0.1,0.1-0.1c0.1-0.2,0-0.5-0.2-0.7l-5-2.7c-0.2-0.1-0.4-0.1-0.5,0L12,5.6L8.3,2.8c-0.2-0.1-0.4-0.1-0.5,0l-5,2.7c-0.1,0-0.1,0.1-0.1,0.1C2.4,5.7,2.5,6.1,2.7,6.2l3.6,2.9l-3.6,3.3c0,0-0.1,0.1-0.1,0.1c-0.1,0.2,0,0.5,0.2,0.7l3.7,2v2.5c0,0.2,0.1,0.3,0.2,0.4l5,3c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1l5-3c0.2-0.1,0.2-0.3,0.2-0.4v-2.5l3.7-2c0,0,0.1-0.1,0.1-0.1C21.6,13,21.5,12.7,21.3,12.5z M16,3.7l4.1,2.2L17,8.6l-4.1-2.4L16,3.7z M16.1,9.2L12,11.9L7.9,9.2L12,6.8L16.1,9.2z M3.9,5.9L8,3.7l3.2,2.4L7,8.6L3.9,5.9z M3.9,12.7l3.2-3l4.1,2.7L8,15L3.9,12.7z M16.5,17.6L12,20.3l-4.5-2.7v-1.7L7.8,16C7.8,16,7.9,16,8,16c0.1,0,0.2,0,0.3-0.1l3.7-2.9l3.7,2.9C15.8,16,15.9,16,16,16c0.1,0,0.2,0,0.2-0.1l0.3-0.1V17.6z M16,15l-3.2-2.5l4.1-2.7l3.2,3L16,15z'
  }));
};

UitDropbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitDropbox.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitDropbox;