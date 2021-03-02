import React from 'react';

import Header from './Header';
import Footer from './Footer';

import '../assets/styles/App.scss';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className='app'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
