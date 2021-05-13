import React from 'react';
import PropTypes from 'prop-types';

const UitToggleOn = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16.5,6.5h-9C4.4624634,6.5,2,8.9624634,2,12s2.4624634,5.5,5.5,5.5h9c3.0375366,0,5.5-2.4624634,5.5-5.5S19.5375366,6.5,16.5,6.5z M16.5,16.5h-9C5.0147095,16.5,3,14.4852905,3,12s2.0147095-4.5,4.5-4.5h9c2.4852905,0,4.5,2.0147095,4.5,4.5S18.9852905,16.5,16.5,16.5z M16.5,9.5c-1.3807373,0-2.5,1.1192627-2.5,2.5s1.1192627,2.5,2.5,2.5c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5C19,10.6192627,17.8807373,9.5,16.5,9.5z M16.5,13.5c-0.8284302,0-1.5-0.6715698-1.5-1.5s0.6715698-1.5,1.5-1.5c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5C18,12.8284302,17.3284302,13.5,16.5,13.5z'
  }));
};

UitToggleOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitToggleOn.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitToggleOn;