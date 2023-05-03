import React from 'react';
import HomeBanner from './HomeBanner';
import Newsletter from './Newsletter';
import Reward from './Reward';
import Statistics from './Statistics';
import LatestRecipes from './LatestRecipes';

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>

      {/* Statistics */}
      <Statistics></Statistics>
      
      {/* Latest Recipes */}
      <LatestRecipes></LatestRecipes>
      
      {/* Share Your Meal and Get Reward */}
      <Reward></Reward>

      {/* Subscribe to Our Newsletter */}
      <Newsletter></Newsletter>

    </div>
  );
};

export default Home;