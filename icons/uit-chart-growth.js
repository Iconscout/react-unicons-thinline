import React from 'react';
import PropTypes from 'prop-types';

const UitChartGrowth = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.5,21H20V4.5C20,4.223877,19.776123,4,19.5,4S19,4.223877,19,4.5V21h-3V8.5C16,8.223877,15.776123,8,15.5,8S15,8.223877,15,8.5V21h-3v-8.5c0-0.276123-0.223877-0.5-0.5-0.5S11,12.223877,11,12.5V21H8v-4.5C8,16.223877,7.776123,16,7.5,16S7,16.223877,7,16.5V21H3V2.5C3,2.223877,2.776123,2,2.5,2S2,2.223877,2,2.5v19.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,21,21.5,21z'
  }));
};

UitChartGrowth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitChartGrowth.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitChartGrowth;