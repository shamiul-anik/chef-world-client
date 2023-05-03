import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BannerImage from '../../assets/images/chef.png';

const HomeBanner = () => {
  
  const checkLocation = useLocation();

  useEffect(() => {
    if (checkLocation.pathname === '/') {
      document.title = 'Chef World | Home';
    }
  }, [checkLocation]);

  return (
    <div className="bg-slate-100 mt-1">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto py-4 lg:py-12">
        <div className="max-w-xl p-4">
          <header>
            <h1 className="banner-title">Welcome to<span className="highlighted-text"> Chef World!</span></h1>
          </header>
          <p className="banner-description mt-4 mb-10 lg:mb-12">Discover recipes of delicious and easy-to-make meals for any occasion.</p>
          <Link to="/" className="primary-button-lg">Get Started</Link>
        </div>
        <div className="p-4 pb-0">
          <img className="image-full" src={BannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;