import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import RecipeBanner from './RecipeBanner';
import Recipe from './Recipe';

const RecipeDetails = () => {

  const checkLocation = useLocation();
  const recipeData = useLoaderData();
  const [recipeDetails, setRecipeDetails] = useState(recipeData);
  // const [recipeDetails, setRecipeDetails] = useState([]);

  const recipes = checkLocation.pathname.match(/recipes/g);

  useEffect(() => {
    if (recipes[0] === 'recipes') {
      document.title = 'Chef World | Recipes';
    }
  }, [recipes]);

  // useEffect(() => {
  //   setRecipeDetails(recipeData);
  // }, [recipeData]);

  return (
    <div>
      <RecipeBanner recipeDetails={recipeDetails}></RecipeBanner>
      <Recipe recipeDetails={recipeDetails}></Recipe>
    </div>
  );
};

export default RecipeDetails;