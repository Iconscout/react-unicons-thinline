import React from 'react';
import PropTypes from 'prop-types';

const UitBatteryEmpty = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.5,10c-0.276123,0-0.5,0.223877-0.5,0.5v3.0005493C21.0001831,13.7765503,21.223999,14.0001831,21.5,14h0.0006104C21.7765503,13.9998169,22.0001831,13.776001,22,13.5v-3C22,10.223877,21.776123,10,21.5,10z M17.5,7h-14C2.671936,7.0009155,2.0009155,7.671936,2,8.5v7c0.0009155,0.828064,0.671936,1.4990845,1.5,1.5h14c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5v-7C18.9990845,7.671936,18.328064,7.0009155,17.5,7z M18,15.5c-0.0005493,0.2759399-0.2240601,0.4994507-0.5,0.5h-14c-0.2759399-0.0005493-0.4994507-0.2240601-0.5-0.5v-7C3.0005493,8.2240601,3.2240601,8.0005493,3.5,8h14c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5V15.5z'
  }));
};

UitBatteryEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitBatteryEmpty.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitBatteryEmpty;