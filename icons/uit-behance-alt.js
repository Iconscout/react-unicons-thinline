import React from 'react';
import PropTypes from 'prop-types';

const UitBehanceAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15.5,6h5C20.776123,6,21,5.776123,21,5.5S20.776123,5,20.5,5h-5C15.223877,5,15,5.223877,15,5.5S15.223877,6,15.5,6z M22.526062,15.0029907c-0.0001831,0-0.0004272-0.000061-0.0006714-0.000061c-0.2706299-0.0338135-0.5174561,0.1581421-0.5513306,0.428772c-0.0004883,0.0042114-0.0009766,0.0084229-0.0014038,0.0126343c-0.2446899,2.1947632-2.22229,3.7756958-4.4170532,3.5310059C15.5307007,18.7495728,13.9993286,17.0374146,14,15v-2h8.4697266c0.276123-0.000061,0.499939-0.223999,0.4998779-0.5001221c0-0.0175781-0.0009766-0.0351562-0.0028076-0.0526123C22.6834106,9.9172974,20.5457764,8.0032959,18,8c-2.7600708,0.0032349-4.9967651,2.2399292-5,5v2c-0.0006714,2.7607422,2.2368164,4.9993896,4.9975586,5.000061c2.5466919,0.0006714,4.6867676-1.9133911,4.9692383-4.444397C22.9976807,15.2813721,22.800415,15.0339355,22.526062,15.0029907z M18,9c1.8225098,0.0049438,3.4130859,1.2366943,3.8740234,3h-7.7470093C14.5847778,10.2351074,16.1766968,9.0020142,18,9z M9.3961182,11.4335938c1.6231689-1.0442505,2.0924683-3.206543,1.0482178-4.8297119C9.8001709,5.6026001,8.6905518,4.9981689,7.5,5h-6C1.223999,4.9998169,1.0001831,5.2234497,1,5.4993896V19.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5H7.5c2.4803467,0.0049438,4.4950562-2.0018311,4.5-4.4821777C12.003479,13.7648926,10.9867554,12.170166,9.3961182,11.4335938z M2,6h5.5C8.8807373,6,10,7.1192627,10,8.5S8.8807373,11,7.5,11H2V6z M7.5,19H2v-7h5.5c1.9329834,0,3.5,1.5670166,3.5,3.5S9.4329834,19,7.5,19z'
  }));
};

UitBehanceAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitBehanceAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitBehanceAlt;