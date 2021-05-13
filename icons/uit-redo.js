import React from 'react';
import PropTypes from 'prop-types';

const UitRedo = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.5,11.5c-0.276123,0-0.5,0.223877-0.5,0.5c-0.0076294,3.3253174-1.8441162,6.376709-4.7788086,7.9404297c-4.3968506,2.3427734-9.8604126,0.6776123-12.203125-3.7192383C1.675293,11.8243408,3.3404541,6.3607788,7.7373047,4.0180664C11.8783569,1.8115845,16.9633789,3.1623535,19.4984741,7H16.5C16.223877,7,16,7.223877,16,7.5S16.223877,8,16.5,8h4c0.0001831,0,0.0003662,0,0.0006104,0C20.7765503,7.9998169,21.0001831,7.776001,21,7.5v-4C21,3.223877,20.776123,3,20.5,3S20,3.223877,20,3.5v2.4971924C18.1317139,3.5110474,15.1925659,2.0039673,12.0252686,2C6.5024414,1.993042,2.0196533,6.4645386,2.0126343,11.9873657C2.0056763,17.5101929,6.4771729,21.993042,12,22c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,11.723877,21.776123,11.5,21.5,11.5z'
  }));
};

UitRedo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitRedo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitRedo;