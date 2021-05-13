import React from 'react';
import PropTypes from 'prop-types';

const UitGrid = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.5,2h-19C2.4998169,2,2.4996338,2,2.4993896,2C2.2234497,2.0001831,1.9998169,2.223999,2,2.5v19c0,0.0001831,0,0.0003662,0,0.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h19c0.0001831,0,0.0003662,0,0.0006104,0C21.7765503,21.9998169,22.0001831,21.776001,22,21.5v-19c0-0.0001831,0-0.0003662,0-0.0006104C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z M11.5,21H3v-5.5h8.5V21z M11.5,14.5H3v-5h8.5V14.5z M21,21h-8.5v-5.5H21V21z M21,14.5h-8.5v-5H21V14.5z M21,8.5H3V3h18V8.5z'
  }));
};

UitGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitGrid.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitGrid;