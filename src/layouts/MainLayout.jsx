import React, { useContext } from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const MainLayout = () => {

  const { loading } = useContext(AuthContext);

  console.log("Loading Status: ", loading);

  return (
    <div className='min-h-[calc(100dvh-611px)]'>
      <Header></Header>
      {
        !loading && <Outlet></Outlet>
      }
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;