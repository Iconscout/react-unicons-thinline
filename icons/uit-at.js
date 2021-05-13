import React from 'react';
import PropTypes from 'prop-types';

const UitAt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M13.8076172,2.1621094C12.3258057,1.8961182,10.8031006,1.9671021,9.352478,2.369751C4.0139771,3.8514404,0.8874512,9.3803101,2.3691406,14.718811c0.6398315,2.3341064,2.1170044,4.3508301,4.1494141,5.664978c1.6397095,1.0499268,3.545166,1.6096191,5.4921875,1.6132812C13.7624512,21.9979248,15.4833984,21.5368042,17,20.6601562c0.2389526-0.1380615,0.3206787-0.4436646,0.1826172-0.6826172S16.7389526,19.6568604,16.5,19.7949219c-2.9481812,1.6875-6.5914917,1.5891113-9.4443359-0.2549438c-1.8234253-1.1793823-3.1483765-2.9893188-3.7216797-5.0839233c-0.3635254-1.3070679-0.4278564-2.6792603-0.1883545-4.0145874c0.8806763-4.9096069,5.574646-8.1757202,10.4842529-7.2949829C17.9761353,4.0089111,21.0805664,7.8607178,21,12.2910156V12.5c0,1.3807373-1.1192627,2.5-2.5,2.5S16,13.8807373,16,12.5v-4C16,8.223877,15.776123,8,15.5,8S15,8.223877,15,8.5v0.8795166C14.2667847,8.5407715,13.2015991,8,12,8c-2.2091675,0-4,1.7908325-4,4s1.7908325,4,4,4c1.4407349-0.0014038,2.6925049-0.7705688,3.3966675-1.9135742C15.9766235,15.2177734,17.1412964,16,18.5,16c1.9329834,0,3.5-1.5670166,3.5-3.5v-0.2089844C22.0811157,7.376709,18.630249,3.1101685,13.8076172,2.1621094z M12,15c-1.6568604,0-3-1.3431396-3-3s1.3431396-3,3-3c1.6561279,0.0018311,2.9981689,1.3438721,3,3C15,13.6568604,13.6568604,15,12,15z'
  }));
};

UitAt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitAt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitAt;