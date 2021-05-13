import React from 'react';
import PropTypes from 'prop-types';

const UitDocumentLayoutRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M2.5,12h9c0.276123,0,0.5-0.223877,0.5-0.5S11.776123,11,11.5,11h-9C2.223877,11,2,11.223877,2,11.5S2.223877,12,2.5,12z M2.5,8h9C11.776123,8,12,7.776123,12,7.5S11.776123,7,11.5,7h-9C2.223877,7,2,7.223877,2,7.5S2.223877,8,2.5,8z M13.5,19h-11C2.223877,19,2,19.223877,2,19.5S2.223877,20,2.5,20h11c0.276123,0,0.5-0.223877,0.5-0.5S13.776123,19,13.5,19z M21.5,15h-19C2.223877,15,2,15.223877,2,15.5S2.223877,16,2.5,16h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,15,21.5,15z M21.5,4h-7c-0.0001831,0-0.0003662,0-0.0005493,0C14.2234497,4.0001831,13.9998169,4.223999,14,4.5v7c0,0.0001831,0,0.0003662,0,0.0005493C14.0001831,11.7765503,14.223999,12.0001831,14.5,12h7c0.0001831,0,0.0003662,0,0.0006104,0C21.7765503,11.9998169,22.0001831,11.776001,22,11.5v-7c0-0.0001831,0-0.0003662,0-0.0006104C21.9998169,4.2234497,21.776001,3.9998169,21.5,4z M21,11h-6V5h6V11z'
  }));
};

UitDocumentLayoutRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitDocumentLayoutRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitDocumentLayoutRight;