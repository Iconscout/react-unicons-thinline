import React from 'react';
import PropTypes from 'prop-types';

const UitDocumentLayoutCenter = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8.5,12h7.0006104C15.7765503,11.9998169,16.0001831,11.776001,16,11.5V4.4993896C15.9998169,4.2234497,15.776001,3.9998169,15.5,4H8.4994507C8.2234497,4.0001831,7.9998169,4.223999,8,4.5v7.0005493C8.0001831,11.7765503,8.223999,12.0001831,8.5,12z M9,5h6v6H9V5z M21.5,11h-3c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h3c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,11,21.5,11z M2.5,8h3C5.776123,8,6,7.776123,6,7.5S5.776123,7,5.5,7h-3C2.223877,7,2,7.223877,2,7.5S2.223877,8,2.5,8z M18.5,8h3C21.776123,8,22,7.776123,22,7.5S21.776123,7,21.5,7h-3C18.223877,7,18,7.223877,18,7.5S18.223877,8,18.5,8z M21.5,15h-19C2.223877,15,2,15.223877,2,15.5S2.223877,16,2.5,16h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,15,21.5,15z M2.5,12h3C5.776123,12,6,11.776123,6,11.5S5.776123,11,5.5,11h-3C2.223877,11,2,11.223877,2,11.5S2.223877,12,2.5,12z M13.5,19h-11C2.223877,19,2,19.223877,2,19.5S2.223877,20,2.5,20h11c0.276123,0,0.5-0.223877,0.5-0.5S13.776123,19,13.5,19z'
  }));
};

UitDocumentLayoutCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitDocumentLayoutCenter.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitDocumentLayoutCenter;