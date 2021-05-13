import React from 'react';
import PropTypes from 'prop-types';

const UitCommentDots = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,11.25c-0.4141846,0-0.75,0.3358154-0.75,0.75s0.3358154,0.75,0.75,0.75s0.75-0.3358154,0.75-0.75S12.4141846,11.25,12,11.25z M9,11.25c-0.4141846,0-0.75,0.3358154-0.75,0.75S8.5858154,12.75,9,12.75S9.75,12.4141846,9.75,12S9.4141846,11.25,9,11.25z M15,11.25c-0.4141846,0-0.75,0.3358154-0.75,0.75s0.3358154,0.75,0.75,0.75s0.75-0.3358154,0.75-0.75S15.4141846,11.25,15,11.25z M19.4152832,5.2902832c-3.7055054-4.09552-10.02948-4.4117432-14.125-0.7062988c-4.09552,3.7055054-4.4117432,10.02948-0.7062988,14.125l-2.4375,2.4375c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C2,21.776062,2.223877,21.999939,2.5,22H12c2.4794312-0.000061,4.8704224-0.9212646,6.7089844-2.5847168C22.8045654,15.7097778,23.1207275,9.3858032,19.4152832,5.2902832z M12,21H3.7069702l1.928772-1.9287109c0.000061-0.000061,0.0001221-0.0001221,0.0001221-0.0001831c0.1951904-0.1952515,0.1951294-0.5117188-0.0001221-0.7068481C3.9483643,16.6768799,3.0002441,14.3883667,3,12.0020142c-0.0005493-4.9700317,4.0279541-8.9994507,8.9979858-9c4.9699707-0.0005493,8.9994507,4.0279541,9,8.9979858C20.9985352,16.9699707,16.9700317,20.9994507,12,21z'
  }));
};

UitCommentDots.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitCommentDots.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitCommentDots;