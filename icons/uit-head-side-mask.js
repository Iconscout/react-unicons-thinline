import React from 'react';
import PropTypes from 'prop-types';

const UitHeadSideMask = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M13.2,2.5c-0.1,0-0.1,0-0.2,0c-3.9,0-7,3.1-7,7c0,0,0,0.1,0,0.1l-1.9,3.1C4,12.8,4,12.9,4,13v0v0v0c0,0.1,0,0.1,0,0.2l1.5,3.9c0.4,0.8,1.3,1.4,2.2,1.4H9V21c0,0,0,0,0,0c0,0.3,0.2,0.5,0.5,0.5c0,0,0,0,0,0c0.3,0,0.5-0.2,0.5-0.5v-2.5h2.5c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0l4.5-1.5L17,17.4c0,0.1,0,0.2,0,0.3l1,3.5c0.1,0.2,0.3,0.4,0.5,0.4c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0.3-0.1,0.4-0.4,0.3-0.6l-1-3.3l2-7.4c0,0,0-0.1,0-0.1V9.8C20,5.9,17.1,2.7,13.2,2.5z M12,17.5H7.7c-0.6,0-1.1-0.3-1.3-0.8l-1.2-3.2H12V17.5z M17.4,15.8L13,17.3v-3.9l5.6-1.9L17.4,15.8z M18.9,10.2l-6.5,2.3h-7L6.9,10C7,9.9,7,9.8,7,9.7c0,0,0-0.1,0-0.1l0-0.1c0-1.6,0.7-3.2,1.8-4.3c1.2-1.1,2.7-1.8,4.4-1.7c3.3,0.2,5.9,3,5.8,6.3L18.9,10.2z'
  }));
};

UitHeadSideMask.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitHeadSideMask.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitHeadSideMask;