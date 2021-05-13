import React from 'react';
import PropTypes from 'prop-types';

const UitCornerLeftDown = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.5,5h-9.1113281C8.9660034,5.0027466,7.0027466,6.9660034,7,9.3886719v8.9042969l-4.1465454-4.1464233c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702l4.9995728,4.9995728c0.0458984,0.0459595,0.1005859,0.0828247,0.161377,0.1082153C7.3678589,19.9865112,7.4332275,20.0001221,7.5,20h0.0006104c0.0106201,0,0.0195312-0.0053711,0.0299683-0.0060425c0.0558472-0.003479,0.1112671-0.0115356,0.1621704-0.0328369c0.0610352-0.0255127,0.1159058-0.062561,0.1618652-0.1087646l4.9988403-4.9988403c0.1871338-0.1937866,0.1871338-0.5009766,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041626-0.7069702-0.0123291L8,18.2929688V9.3886719C8.0023804,7.5181274,9.5181274,6.0023804,11.3886719,6H20.5C20.776123,6,21,5.776123,21,5.5S20.776123,5,20.5,5z'
  }));
};

UitCornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitCornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitCornerLeftDown;