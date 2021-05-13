import React from 'react';
import PropTypes from 'prop-types';

const UitToiletPaper = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M22.4,21.2l-0.6-0.8c-1.1-1.3-1.7-3-1.7-4.8V7.5c0-3-2.5-5.5-5.5-5.5H6.1C6.1,2,6,2,6,2C3.2,2,1,4.7,1,8c0,3.3,2.2,6,5,6c0,0,0,0,0,0h4v1.6c0,2,0.7,3.9,2,5.4l0.6,0.8c0.1,0.1,0.2,0.2,0.4,0.2h9c0.1,0,0.2,0,0.3-0.1C22.5,21.7,22.6,21.4,22.4,21.2z M10,13H8.7c0.5-0.4,0.9-0.9,1.3-1.4V13z M6,13c-2.2,0-4-2.2-4-5c0-2.7,1.8-5,4-5c0,0,0,0,0,0h0.1C8.2,3,10,5.3,10,8C10,10.8,8.2,13,6,13z M13.2,21l-0.5-0.6c-1.1-1.3-1.7-3-1.7-4.8V8c0,0,0,0,0,0c0-2.1-0.9-3.9-2.2-4.9h5.7C17,3,19,5,19,7.5v8.1c0,2,0.7,3.9,1.9,5.4H13.2z M6,6.2C5.1,6.3,4.4,7.1,4.5,8C4.4,8.9,5.1,9.7,6,9.7C6.9,9.7,7.6,8.9,7.5,8C7.6,7.1,6.9,6.3,6,6.2z M6,8.7C5.7,8.7,5.5,8.4,5.5,8S5.7,7.2,6,7.2S6.5,7.6,6.5,8S6.3,8.7,6,8.7z'
  }));
};

UitToiletPaper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitToiletPaper.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitToiletPaper;