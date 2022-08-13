import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const Layout = ({ children }) => (
  <div className="bg-black h-screen relative overflow-y-hidden">
    <Header />
    <div className="my-14 md:mt-0 h-[calc(100vh_-_112px)] md:h-screen pt-10">
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
