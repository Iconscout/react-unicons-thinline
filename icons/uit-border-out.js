import React from 'react';
import PropTypes from 'prop-types';

const UitBorderOut = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16,13.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5c0-0.8284302-0.6715698-1.5-1.5-1.5s-1.5,0.6715698-1.5,1.5S15.1715698,13.5,16,13.5z M16,11.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5c0,0.276123-0.223877,0.5-0.5,0.5s-0.5-0.223877-0.5-0.5S15.723877,11.5,16,11.5z M20.5,3H3.4993896C3.2234497,3.0001831,2.9998169,3.223999,3,3.5v17.0005493C3.0001831,20.7765503,3.223999,21.0001831,3.5,21h17.0006104C20.7765503,20.9998169,21.0001831,20.776001,21,20.5V3.4993896C20.9998169,3.2234497,20.776001,2.9998169,20.5,3z M20,20H4V4h16V20z M12,17.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5c0-0.8284302-0.6715698-1.5-1.5-1.5s-1.5,0.6715698-1.5,1.5S11.1715698,17.5,12,17.5z M12,15.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5c0,0.276123-0.223877,0.5-0.5,0.5s-0.5-0.223877-0.5-0.5S11.723877,15.5,12,15.5z M12,9.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5c0-0.8284302-0.6715698-1.5-1.5-1.5S10.5,7.1715698,10.5,8S11.1715698,9.5,12,9.5z M12,7.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5c0,0.276123-0.223877,0.5-0.5,0.5S11.5,8.276123,11.5,8S11.723877,7.5,12,7.5z M8,13.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5c0-0.8284302-0.6715698-1.5-1.5-1.5S6.5,11.1715698,6.5,12S7.1715698,13.5,8,13.5z M8,11.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5c0,0.276123-0.223877,0.5-0.5,0.5S7.5,12.276123,7.5,12S7.723877,11.5,8,11.5z M12,13.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5c0-0.8284302-0.6715698-1.5-1.5-1.5s-1.5,0.6715698-1.5,1.5S11.1715698,13.5,12,13.5z M12,11.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5c0,0.276123-0.223877,0.5-0.5,0.5s-0.5-0.223877-0.5-0.5S11.723877,11.5,12,11.5z'
  }));
};

UitBorderOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitBorderOut.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitBorderOut;