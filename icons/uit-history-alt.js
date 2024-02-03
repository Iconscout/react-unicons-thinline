import React from 'react';
import PropTypes from 'prop-types';

const UitHistoryAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16.7278442,3.1806641C12.3101196,0.8087769,6.9154053,2.1035767,4,5.9998169V3.5C4,3.223877,3.776123,3,3.5,3S3,3.223877,3,3.5v4.0006104C3.0001831,7.7765503,3.223999,8.0001831,3.5,8h4C7.776123,8,8,7.776123,8,7.5S7.776123,7,7.5,7H4.5234375c1.6569214-2.4729614,4.4342651-3.9953003,7.4486694-4c4.9705811-0.0076904,9.0062256,4.0155029,9.013916,8.986084C20.9937744,16.956604,16.9705811,20.9923096,12,21c-0.276123,0-0.5,0.223877-0.5,0.5S11.723877,22,12,22c3.6832275-0.00177,7.067627-2.0270996,8.8098755-5.2721558C23.423584,11.8596802,21.5960083,5.7943726,16.7278442,3.1806641z M12,8c-0.276123,0-0.5,0.223877-0.5,0.5v3.5005493C11.5001831,12.2765503,11.723999,12.5001831,12,12.5h2.5c0.276123,0,0.5-0.223877,0.5-0.5s-0.223877-0.5-0.5-0.5h-2v-3C12.5,8.223877,12.276123,8,12,8z'
  }));
};

UitHistoryAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitHistoryAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitHistoryAlt;