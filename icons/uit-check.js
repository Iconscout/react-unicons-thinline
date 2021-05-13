import React from 'react';
import PropTypes from 'prop-types';

const UitCheck = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.3534546,7.5735474c-0.1932983-0.1972046-0.5098267-0.2003784-0.7070312-0.0070801l-7.8066406,7.8066406l-3.4863281-3.4863281c-0.194397-0.1905518-0.5054321-0.1905518-0.6998291,0c-0.1972046,0.1932373-0.2003784,0.5097656-0.0071411,0.7069702l3.8398438,3.8398438c0.0936279,0.0939331,0.2208862,0.1466675,0.3535156,0.1464844c0.1326294,0.0001221,0.2598267-0.0526123,0.3534546-0.1464844l8.1601562-8.1601562C18.5440063,8.0790405,18.5440063,7.7679443,18.3534546,7.5735474z'
  }));
};

UitCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitCheck.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitCheck;