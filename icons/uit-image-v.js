import React from 'react';
import PropTypes from 'prop-types';

const UitImageV = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19.5,2h-15C3.119812,2.0012817,2.0012817,3.119812,2,4.5v15c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h15c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-15C21.9987183,3.119812,20.880188,2.0012817,19.5,2z M4.5,21c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-5.2246094l3.7626953-3.7626953c0.684021-0.6816406,1.7905884-0.6816406,2.4746094,0L19.7047729,20.979187C19.637207,20.9885864,19.5701294,20.999939,19.5,21H4.5z M21,19.5c-0.0004272,0.3783569-0.1454468,0.7199097-0.376709,0.9837036l-6.9161377-6.9155273l1.055542-1.055481c0.684021-0.6816406,1.7905884-0.6816406,2.4746094,0L21,16.2753906V19.5z M21,14.8613892l-3.0556641-3.0556641c-1.0744629-1.0722656-2.814209-1.0722656-3.8886719,0l-1.055481,1.055481l-3.0558472-3.055542c-1.0880127-1.0390625-2.8006592-1.0390625-3.8886719,0L3,12.8613281V4.5C3.0009155,3.671936,3.671936,3.0009155,4.5,3h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V14.8613892z'
  }));
};

UitImageV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitImageV.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitImageV;