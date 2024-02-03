import React from 'react';
import PropTypes from 'prop-types';

const UitSimCard = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16.9794922,4H7.0097656C5.3484497,4.0021973,4.0021973,5.3484497,4,7.0097656v9.9697266C4.0021973,18.6467285,5.3532715,19.9978027,7.0205078,20H9.5h0.0006104H14.5h0.0006104h2.489624C18.6516113,19.9978027,19.9978027,18.6515503,20,16.9902344V7.0205078C19.9978027,5.3532715,18.6467285,4.0021973,16.9794922,4z M10,5h4v4h-4V5z M9,19H7.0205078C5.9050903,18.9988403,5.0011597,18.0949097,5,16.9794922V15h4V19z M14,19h-4v-4h4V19z M19,16.9902344C18.9989014,18.0997314,18.0997314,18.9989014,16.9902344,19H15v-4h4V16.9902344z M19,14H5V7.0097656C5.0010986,5.9002686,5.9002686,5.0010986,7.0097656,5H9v4.5c0,0.0001831,0,0.0003662,0,0.0005493C9.0001831,9.7765503,9.223999,10.0001831,9.5,10h0.0006104H14.5h0.0006104H19V14z M19,9h-4V5h1.9794922C18.0949097,5.0011597,18.9988403,5.9050903,19,7.0205078V9z'
  }));
};

UitSimCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UitSimCard.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UitSimCard;