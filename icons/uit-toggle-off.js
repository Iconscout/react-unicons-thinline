import React from 'react';
import PropTypes from 'prop-types';

const UitToggleOff = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7.5,9.5C6.1192627,9.5,5,10.6192627,5,12s1.1192627,2.5,2.5,2.5c1.380127-0.0014648,2.4985352-1.119873,2.5-2.5C10,10.6192627,8.8807373,9.5,7.5,9.5z M7.5,13.5C6.6715698,13.5,6,12.8284302,6,12s0.6715698-1.5,1.5-1.5C8.328064,10.5009155,8.9990845,11.171936,9,12C9,12.8284302,8.3284302,13.5,7.5,13.5z M16.5,6.5h-9C4.4624634,6.5,2,8.9624634,2,12s2.4624634,5.5,5.5,5.5h9c3.0375366,0,5.5-2.4624634,5.5-5.5S19.5375366,6.5,16.5,6.5z M16.5,16.5h-9C5.0147095,16.5,3,14.4852905,3,12s2.0147095-4.5,4.5-4.5h9c2.4852905,0,4.5,2.0147095,4.5,4.5S18.9852905,16.5,16.5,16.5z'
  }));
};

UitToggleOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitToggleOff.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitToggleOff;