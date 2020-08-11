import React from 'react';
import PropTypes from 'prop-types';

const UisBorderBottom = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,9.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,9.5,12,9.5z M12,13.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,13.5,12,13.5z M12,17.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,17.5,12,17.5z M12,5.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,5.5,12,5.5z M20,5.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S19.4,5.5,20,5.5z M8,5.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S7.4,5.5,8,5.5z M16,5.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S15.4,5.5,16,5.5z M16,13.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S15.4,13.5,16,13.5z M4,9.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S3.4,9.5,4,9.5z M20,15.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,15.5,20,15.5z M20,11.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,11.5,20,11.5z M20,7.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,7.5,20,7.5z M20,19.5H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,19.5,20,19.5z M4,13.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S3.4,13.5,4,13.5z M4,5.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S3.4,5.5,4,5.5z M8,13.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S7.4,13.5,8,13.5z M4,17.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S3.4,17.5,4,17.5z'
  }));
};

UisBorderBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisBorderBottom.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisBorderBottom;