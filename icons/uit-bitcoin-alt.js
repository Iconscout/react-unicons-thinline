import React from 'react';
import PropTypes from 'prop-types';

const UitBitcoinAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15.7216187,11.5477295c1.5537109-1.3565063,1.713562-3.7156372,0.3571167-5.2693481C15.3659668,5.4619751,14.3337402,4.9954834,13.25,5H12V3.5C12,3.223877,11.776123,3,11.5,3S11,3.223877,11,3.5V5H8V3.5C8,3.223877,7.776123,3,7.5,3S7,3.223877,7,3.5V5H5.5C5.223877,5,5,5.223877,5,5.5S5.223877,6,5.5,6H7v12H5.5C5.223877,18,5,18.223877,5,18.5S5.223877,19,5.5,19H7v1.5C7,20.776123,7.223877,21,7.5,21S8,20.776123,8,20.5V19h3v1.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5V19h3.25c2.0657959,0.005249,3.7446899-1.6651611,3.749939-3.730957C19.0047607,13.3782959,17.5978394,11.781311,15.7216187,11.5477295z M8,6h5.25C14.7687988,6,16,7.2312012,16,8.75s-1.2312012,2.75-2.75,2.75H8V6z M15.25,18H8v-5.5h7.25c1.5187988,0,2.75,1.2312012,2.75,2.75S16.7687988,18,15.25,18z'
  }));
};

UitBitcoinAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitBitcoinAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitBitcoinAlt;