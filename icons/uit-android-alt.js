import React from 'react';
import PropTypes from 'prop-types';

const UitAndroidAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3.5006104,9H3.5C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896V14.5C3,14.776123,3.223877,15,3.5,15S4,14.776123,4,14.5v-5C4.0001831,9.223999,3.7765503,9.0001831,3.5006104,9z M15.8436279,4.3982544l1.0733643-1.6218872c0.1526489-0.2302856,0.0896606-0.5407104-0.140625-0.6933594s-0.5407104-0.0896606-0.6933594,0.140625l-1.0602417,1.6019897c-1.8648682-1.1008301-4.1807251-1.1008301-6.0455322,0L7.9169922,2.2236328c-0.1526489-0.2302856-0.4630737-0.2932739-0.6933594-0.140625s-0.2932739,0.4630737-0.140625,0.6933594l1.0733643,1.6218872C6.7900391,5.5359497,6,7.2220459,6,9v8.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5H9.5v3.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5V18h3v3.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5V18h3c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507V9C18,7.2220459,17.2099609,5.5359497,15.8436279,4.3982544z M17,17H7v-7h10V17z M7,9c0-2.7614136,2.2385864-5,5-5s5,2.2385864,5,5H7z M20.5006104,9H20.5c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896V14.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5v-5C21.0001831,9.223999,20.7765503,9.0001831,20.5006104,9z'
  }));
};

UitAndroidAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitAndroidAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitAndroidAlt;