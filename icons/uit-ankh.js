import React from 'react';
import PropTypes from 'prop-types';

const UitAnkh = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.5,13h-4.807312C15.6906128,11.5979004,16.914978,9.3397217,17,6.9003906c-0.0552368-2.7614136-2.338562-4.9552002-5.0999756-4.9000244C9.2163696,2.0540771,7.0536499,4.2167358,7,6.9003906C7.085022,9.3397217,8.3093872,11.5979004,10.307312,13H5.5C5.223877,13,5,13.223877,5,13.5S5.223877,14,5.5,14h6v7.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5V14h6c0.276123,0,0.5-0.223877,0.5-0.5S18.776123,13,18.5,13z M11.9990234,12.9306641C11.1318359,12.4345703,8,10.3984375,8,6.9003906c0.0556641-2.2091675,1.8916626-3.954895,4.100769-3.899231C14.2316284,3.0548706,15.9462891,4.7695312,16,6.9003906C16,10.3876953,12.8662109,12.4326172,11.9990234,12.9306641z'
  }));
};

UitAnkh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitAnkh.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitAnkh;