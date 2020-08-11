import React from 'react';
import PropTypes from 'prop-types';

const UisLockAccess = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h5v5c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z M3,10L3,10c0.6,0,1-0.4,1-1V4h5c0.6,0,1-0.4,1-1S9.6,2,9,2H3C2.4,2,2,2.4,2,3v6C2,9.6,2.4,10,3,10z M9,20H4v-5c0-0.6-0.4-1-1-1s-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1S9.6,20,9,20z M21,14c-0.6,0-1,0.4-1,1v5h-5c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c0.6,0,1-0.4,1-1v-6C22,14.4,21.6,14,21,14z M12,6c-1.7,0-3,1.3-3,3v1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2V9C15,7.3,13.7,6,12,6z M13,10h-2V9c0-0.6,0.4-1,1-1s1,0.4,1,1V10z'
  }));
};

UisLockAccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UisLockAccess.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UisLockAccess;