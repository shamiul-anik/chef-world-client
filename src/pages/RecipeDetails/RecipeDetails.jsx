import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeBanner from './RecipeBanner';
import Recipe from './Recipe';

const RecipeDetails = () => {

  const checkLocation = useLocation();

  const recipes = checkLocation.pathname.match(/recipes/g);

  useEffect(() => {
    if (recipes[0] === 'recipes') {
      document.title = 'Chef World | Recipes';
    }
  }, [recipes]);

  return (
    <div>
      <RecipeBanner></RecipeBanner>

      <section className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-8">
          <Recipe></Recipe>
        </div>
      </section>

    </div>
  );
};

export default RecipeDetails;