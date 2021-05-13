import React from 'react';
import PropTypes from 'prop-types';

const UitStopwatch = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M10,4h4c0.276123,0,0.5-0.223877,0.5-0.5S14.276123,3,14,3h-4C9.723877,3,9.5,3.223877,9.5,3.5S9.723877,4,10,4z M17.9934692,8.7134399l1.3599854-1.3599854c0.1871948-0.1937256,0.1871948-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681L17.286499,8.0064697C15.8762207,6.7615356,14.0291138,6,12,6S8.1237793,6.7615356,6.7134399,8.0065308L5.3534546,6.6465454c-0.1937256-0.1871948-0.5009155-0.1871948-0.6947021,0C4.460144,6.8383789,4.4546509,7.1549072,4.6464844,7.3535156L6.0064697,8.713501C4.7615356,10.1237793,4,11.9708862,4,14c0,4.4182739,3.5817261,8,8,8c4.4161987-0.0050659,7.9949341-3.5838013,8-8C20,11.9708862,19.2384644,10.1237793,17.9934692,8.7134399z M12,21c-3.8659668,0-7-3.1340332-7-7c0-1.9257812,0.7783813-3.6693726,2.0368652-4.9349976C7.0418701,9.0603638,7.0487671,9.0586548,7.0535889,9.053833c0.0049438-0.0048828,0.0064087-0.0115967,0.0110474-0.0166626C8.3302612,7.7784424,10.0739746,7,12,7c1.9299927,0.0023193,3.677002,0.7848511,4.9430542,2.0488892c0.0027466,0.0027466,0.005249,0.0053101,0.0080566,0.0080566C18.2151489,10.322998,18.9976807,12.0700073,19,14C19,17.8659668,15.8659668,21,12,21z M12.5,12.5917969V10.5c0-0.276123-0.223877-0.5-0.5-0.5s-0.5,0.223877-0.5,0.5v2.0917969c-0.5812378,0.206604-1,0.7560425-1,1.4082031c0,0.8284302,0.6715698,1.5,1.5,1.5s1.5-0.6715698,1.5-1.5C13.5,13.3478394,13.0812378,12.7984009,12.5,12.5917969z'
  }));
};

UitStopwatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitStopwatch.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitStopwatch;