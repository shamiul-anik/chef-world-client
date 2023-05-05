import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeBanner from './RecipeBanner';
import Recipe from './Recipe';
import { useTitle } from '../../hooks/useTitle';

const RecipeDetails = () => {

  useTitle("Recipes");

  const recipeData = useLoaderData();
  const [recipeDetails, setRecipeDetails] = useState(recipeData);
  // const [recipeDetails, setRecipeDetails] = useState([]);
  
  // const checkLocation = useLocation();
  // const recipes = checkLocation.pathname.match(/recipes/g);

  // useEffect(() => {
  //   if (recipes[0] === 'recipes') {
  //     document.title = 'Chef World | Recipes';
  //   }
  // }, [recipes]);

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