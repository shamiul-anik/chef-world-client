import React, { useEffect, useState } from 'react';
import HomeBanner from './HomeBanner';
import Newsletter from './Newsletter';
import Reward from './Reward';
import Statistics from './Statistics';
import LatestRecipes from './LatestRecipes';
import Chefs from './Chefs';
import { useLoaderData, useLocation } from 'react-router-dom';

const Home = () => {
  
  const checkLocation = useLocation();
  const chefDetailsLoadedData = useLoaderData();
  const [chefDetails, setChefDetails] = useState([]);

  useEffect(() => {
    if (checkLocation.pathname === '/') {
      document.title = 'Chef World | Home';
    }
  }, [checkLocation]);
 
  useEffect(() => {
    setChefDetails(chefDetailsLoadedData);
  }, [chefDetailsLoadedData]);

  return (
    <div>
      <HomeBanner></HomeBanner>

      {/* Statistics */}
      <Statistics></Statistics>
      
      {/* Our Chefs */}
      <Chefs chefDetails={chefDetails}></Chefs>
      
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