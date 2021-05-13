import React from 'react';
import PropTypes from 'prop-types';

const UitSignalAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M5.5,18C5.223877,18,5,18.223877,5,18.5v3.0005493C5.0001831,21.7765503,5.223999,22.0001831,5.5,22h0.0006104C5.7765503,21.9998169,6.0001831,21.776001,6,21.5v-3C6,18.223877,5.776123,18,5.5,18z M10.5,14c-0.276123,0-0.5,0.223877-0.5,0.5v7.0005493C10.0001831,21.7765503,10.223999,22.0001831,10.5,22h0.0006104C10.7765503,21.9998169,11.0001831,21.776001,11,21.5v-7C11,14.223877,10.776123,14,10.5,14z M20.5,2C20.223877,2,20,2.223877,20,2.5v19.0005493C20.0001831,21.7765503,20.223999,22.0001831,20.5,22h0.0006104C20.7765503,21.9998169,21.0001831,21.776001,21,21.5v-19C21,2.223877,20.776123,2,20.5,2z M15.5,9C15.223877,9,15,9.223877,15,9.5v12.0005493C15.0001831,21.7765503,15.223999,22.0001831,15.5,22h0.0006104C15.7765503,21.9998169,16.0001831,21.776001,16,21.5v-12C16,9.223877,15.776123,9,15.5,9z'
  }));
};

UitSignalAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitSignalAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitSignalAlt;