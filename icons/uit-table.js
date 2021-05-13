import React from 'react';
import PropTypes from 'prop-types';

const UitTable = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.5,2H2.4993896C2.2234497,2.0001831,1.9998169,2.223999,2,2.5v19.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h19.0006104C21.7765503,21.9998169,22.0001831,21.776001,22,21.5V2.4993896C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z M8.5,21H3v-5.5h5.5V21z M8.5,14.5H3v-5h5.5V14.5z M8.5,8.5H3V3h5.5V8.5z M14.5,21h-5v-5.5h5V21z M14.5,14.5h-5v-5h5V14.5z M14.5,8.5h-5V3h5V8.5z M21,21h-5.5v-5.5H21V21z M21,14.5h-5.5v-5H21V14.5z M21,8.5h-5.5V3H21V8.5z'
  }));
};

UitTable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitTable.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitTable;