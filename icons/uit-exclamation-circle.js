import React from 'react';
import PropTypes from 'prop-types';

const UitExclamationCircle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,14.375c-0.3451538,0-0.625,0.2798462-0.625,0.625s0.2798462,0.625,0.625,0.625s0.625-0.2798462,0.625-0.625S12.3451538,14.375,12,14.375z M12,13h0.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-4C12.5,8.223877,12.276123,8,12,8s-0.5,0.223877-0.5,0.5v4.0005493C11.5001831,12.7765503,11.723999,13.0001831,12,13z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z'
  }));
};

UitExclamationCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitExclamationCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitExclamationCircle;