import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/images/chef.png';
import { FaArrowRight } from 'react-icons/fa';

const HomeBanner = () => {
  
  return (
    <div className="bg-slate-100 mt-1">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto py-4 lg:py-12">
        <div className="max-w-xl p-4">
          <header>
            <h1 className="banner-title">Welcome to<span className="highlighted-text"> Chef World!</span></h1>
          </header>
          <p className="banner-description mt-4 mb-8 lg:mb-12">Discover recipes of delicious and easy-to-make meals for any occasion.</p>
          <Link to="/" className="flex gap-3 mx-auto md:mx-0 items-center w-48 justify-center primary-button-lg">Explore <FaArrowRight /></Link>
        </div>
        <div className="p-4 pb-0">
          <img className="image-full" src={BannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;