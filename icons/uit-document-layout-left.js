import React from 'react';
import PropTypes from 'prop-types';

const UitDocumentLayoutLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M2.5,12h7c0.0001831,0,0.0003662,0,0.0006104,0C9.7765503,11.9998169,10.0001831,11.776001,10,11.5v-7c0-0.0001831,0-0.0003662,0-0.0006104C9.9998169,4.2234497,9.776001,3.9998169,9.5,4h-7C2.4998169,4,2.4996338,4,2.4993896,4C2.2234497,4.0001831,1.9998169,4.223999,2,4.5v7c0,0.0001831,0,0.0003662,0,0.0005493C2.0001831,11.7765503,2.223999,12.0001831,2.5,12z M3,5h6v6H3V5z M12.5,8h9C21.776123,8,22,7.776123,22,7.5S21.776123,7,21.5,7h-9C12.223877,7,12,7.223877,12,7.5S12.223877,8,12.5,8z M21.5,15h-19C2.223877,15,2,15.223877,2,15.5S2.223877,16,2.5,16h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,15,21.5,15z M13.5,19h-11C2.223877,19,2,19.223877,2,19.5S2.223877,20,2.5,20h11c0.276123,0,0.5-0.223877,0.5-0.5S13.776123,19,13.5,19z M21.5,11h-9c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h9c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,11,21.5,11z'
  }));
};

UitDocumentLayoutLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitDocumentLayoutLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitDocumentLayoutLeft;