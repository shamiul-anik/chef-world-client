import React, { useEffect, useState } from 'react';
import HomeBanner from './HomeBanner';
import Newsletter from './Newsletter';
import Reward from './Reward';
import Statistics from './Statistics';
import LatestRecipes from './LatestRecipes';
import Chefs from './Chefs';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import PopularRecipes from './PopularRecipes';
import Categories from './Categories';

const Home = () => {
  
  useTitle("Home");

  const chefDetailsLoadedData = useLoaderData();
  const [chefDetails, setChefDetails] = useState([]);
  
  // const checkLocation = useLocation();
  // useEffect(() => {
  //   if (checkLocation.pathname === '/') {
  //     document.title = 'Chef World | Home';
  //   }
  // }, [checkLocation]);


 
  useEffect(() => {
    // console.log("Data of Chef Details from Home");
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
      
      {/* Popular Recipes */}
      <PopularRecipes></PopularRecipes>

      {/* Categories */}
      <Categories></Categories>
      
      {/* Share Your Meal and Get Reward */}
      <Reward></Reward>

      {/* Subscribe to Our Newsletter */}
      <Newsletter></Newsletter>

    </div>
  );
};

export default Home;