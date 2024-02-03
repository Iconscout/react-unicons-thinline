import React from 'react';
import PropTypes from 'prop-types';

const UitCornerDownRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.9614258,16.3088379c-0.0253906-0.0612793-0.0621338-0.1166382-0.1083984-0.1627808l-4.4995117-4.4995117c-0.1937866-0.1871338-0.5009155-0.1871338-0.6947021,0c-0.1986084,0.1918335-0.2041626,0.5083618-0.0123291,0.7069702L17.2930298,16H8.5c-1.380188-0.0012817-2.4987183-1.119812-2.5-2.5v-10C6,3.223877,5.776123,3,5.5,3S5,3.223877,5,3.5v10c0.0023193,1.9320068,1.5679932,3.4976807,3.5,3.5h8.7930298l-3.6465454,3.6464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C13.5,21.276062,13.723877,21.499939,14,21.5c0.1326294,0.0001221,0.2598267-0.0525513,0.3535156-0.1464844l4.4998779-4.4998779c0.0461426-0.0461426,0.0827026-0.1013184,0.1080322-0.1625977c0.0250244-0.0606079,0.0380859-0.1248779,0.038269-0.1894531C18.9996948,16.5010376,19,16.5005493,19,16.5C19,16.4348755,18.9867554,16.3699341,18.9614258,16.3088379z'
  }));
};

UitCornerDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitCornerDownRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitCornerDownRight;