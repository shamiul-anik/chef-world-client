import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>

      <div className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4">

        

        <div className="p-4 lg:p-8 rounded-lg box-shadow-custom mt-6">
          <header>
            <h2 className="content-title text-center">Subscribe to Our Newsletter</h2>
          </header>
          <p className='content-description text-center'>Subscribe to our newsletter & keep up with our latest recipes and organized workshops.</p>
          

        </div>

      </div>
    </div>
  );
};

export default Home;