import React from 'react';
import PropTypes from 'prop-types';

const UitCheckSquare = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9.8466797,15.7539062c0.09375,0.093811,0.2208862,0.1464844,0.3535156,0.1464844c0.1325684,0,0.2597046-0.0526733,0.3534546-0.1464844l6.7998047-6.8007812c0.1904907-0.194397,0.1904907-0.5054932,0-0.6998901c-0.1932983-0.1972046-0.5098267-0.2003784-0.7070312-0.0071411l-6.4462891,6.4472656l-2.8466797-2.8466797c-0.1943359-0.1904907-0.5054321-0.1904907-0.6998291,0c-0.1972046,0.1932983-0.2003784,0.5098267-0.0071411,0.7070312L9.8466797,15.7539062z M21.5,2h-19C2.4998169,2,2.4996338,2,2.4993896,2C2.2234497,2.0001831,1.9998169,2.223999,2,2.5v19c0,0.0001831,0,0.0003662,0,0.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h19c0.0001831,0,0.0003662,0,0.0006104,0C21.7765503,21.9998169,22.0001831,21.776001,22,21.5v-19c0-0.0001831,0-0.0003662,0-0.0006104C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z M21,21H3V3h18V21z'
  }));
};

UitCheckSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitCheckSquare.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitCheckSquare;