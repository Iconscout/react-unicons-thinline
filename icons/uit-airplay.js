import React from 'react';
import PropTypes from 'prop-types';

const UitAirplay = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19.5,3h-15C3.119812,3.0012817,2.0012817,4.119812,2,5.5v10c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h1C5.776123,18,6,17.776123,6,17.5S5.776123,17,5.5,17h-1c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-10C3.0009155,4.671936,3.671936,4.0009155,4.5,4h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5v10c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5h-1c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h1c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-10C21.9987183,4.119812,20.880188,3.0012817,19.5,3z M13.2412109,14.4394531c-0.0863647-0.1141968-0.1880493-0.2160034-0.3022461-0.3024292c-0.6852417-0.5187988-1.661377-0.3838501-2.1801758,0.3014526l-2.8632812,4.2197266C7.727478,18.90625,7.6375732,19.1989746,7.6373291,19.4985962C7.6367798,20.3272705,8.3081055,20.9994507,9.1367188,21h5.7265625c0.2996216-0.0001831,0.5922852-0.0900879,0.8403931-0.2581177c0.6860352-0.4647217,0.8655396-1.397583,0.4008179-2.0836792L13.2412109,14.4394531z M14.8632812,20H9.1367188c-0.1002197-0.000061-0.1980591-0.0302124-0.2809448-0.0866089c-0.2283325-0.1553345-0.2874756-0.4663086-0.1321411-0.6946411L11.5869141,15C11.6791992,14.8624268,11.8343506,14.7802734,12,14.78125c0.1659546-0.0010376,0.321228,0.081543,0.4130859,0.2197266l2.8632812,4.2177734c0.0563965,0.0828247,0.0865479,0.1807251,0.0866089,0.2809448C15.3631592,19.7758179,15.1394043,19.9998169,14.8632812,20z'
  }));
};

UitAirplay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitAirplay.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitAirplay;