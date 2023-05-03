import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';

const LoginLayout = () => {
  return (
    <div className=''>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;