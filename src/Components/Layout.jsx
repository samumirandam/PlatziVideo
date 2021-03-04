import React from 'react';

import Footer from './Footer';

import '../assets/styles/App.scss';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className='app'>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
