import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const Layout = ({ children }) => (
  <div className="bg-black h-screen relative overflow-y-hidden">
    <Header />
    <div className="my-14 h-[calc(100vh_-_56px)] pt-10">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
