import React from 'react';
import PropTypes from 'prop-types';

const UitCompress = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7.5,16h-5C2.223877,16,2,16.223877,2,16.5S2.223877,17,2.5,17H7v4.5005493C7.0001831,21.7765503,7.223999,22.0001831,7.5,22h0.0006104C7.7765503,21.9998169,8.0001831,21.776001,8,21.5v-5.0006104C7.9998169,16.2234497,7.776001,15.9998169,7.5,16z M16.5,8h5C21.776123,8,22,7.776123,22,7.5S21.776123,7,21.5,7H17V2.5C17,2.223877,16.776123,2,16.5,2S16,2.223877,16,2.5v5.0006104C16.0001831,7.7765503,16.223999,8.0001831,16.5,8z M7.5,2C7.223877,2,7,2.223877,7,2.5V7H2.5C2.223877,7,2,7.223877,2,7.5S2.223877,8,2.5,8h5.0006104C7.7765503,7.9998169,8.0001831,7.776001,8,7.5v-5C8,2.223877,7.776123,2,7.5,2z M21.5,16h-5.0005493C16.2234497,16.0001831,15.9998169,16.223999,16,16.5v5.0005493C16.0001831,21.7765503,16.223999,22.0001831,16.5,22h0.0006104C16.7765503,21.9998169,17.0001831,21.776001,17,21.5V17h4.5c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,16,21.5,16z'
  }));
};

UitCompress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitCompress.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitCompress;