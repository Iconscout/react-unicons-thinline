import React from 'react';
import PropTypes from 'prop-types';

const UitSignalAlt3 = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M6.5,16H2.4993896C2.2234497,16.0001831,1.9998169,16.223999,2,16.5v6.0005493C2.0001831,22.7765503,2.223999,23.0001831,2.5,23h4.0006104C6.7765503,22.9998169,7.0001831,22.776001,7,22.5v-6.0006104C6.9998169,16.2234497,6.776001,15.9998169,6.5,16z M6,22H3v-5h3V22z M22.5,2h-4.0005493C18.2234497,2.0001831,17.9998169,2.223999,18,2.5v20.0005493C18.0001831,22.7765503,18.223999,23.0001831,18.5,23h4.0006104C22.7765503,22.9998169,23.0001831,22.776001,23,22.5V2.4993896C22.9998169,2.2234497,22.776001,1.9998169,22.5,2z M22,22h-3V3h3V22z M14.5,10h-4.0005493C10.2234497,10.0001831,9.9998169,10.223999,10,10.5v12.0005493C10.0001831,22.7765503,10.223999,23.0001831,10.5,23h4.0006104C14.7765503,22.9998169,15.0001831,22.776001,15,22.5V10.4993896C14.9998169,10.2234497,14.776001,9.9998169,14.5,10z M14,22h-3V11h3V22z'
  }));
};

UitSignalAlt3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitSignalAlt3.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitSignalAlt3;