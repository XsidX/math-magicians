import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, onClick }) => (
  <div
    className={`${className} bg-black md:bg-stone-900 text-gray-200 font-roboto text-3xl flex items-center justify-center cursor-pointer`}
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex="0"
  >
    {children}
  </div>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  children: null,
  onClick: () => {},
};

export default Button;
