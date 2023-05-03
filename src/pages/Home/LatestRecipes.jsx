import React from 'react';
import { FaComment, FaTasks } from 'react-icons/fa';
import RecipeImage1 from '../../assets/images/recipes/recipe1.jpg';
import RecipeImage2 from '../../assets/images/recipes/recipe2.jpg';
import RecipeImage3 from '../../assets/images/recipes/recipe3.jpg';
import RecipeImage4 from '../../assets/images/recipes/recipe4.jpg';

const LatestRecipes = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4">
      <header>
        <h2 className="content-title text-center">Latest Recipes</h2>
      </header>
      <p className="content-description text-center mt-4">
        Find out about our latest recipes in Chef World.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={RecipeImage1} alt="Recipe Image 1" />
          </figure>
          <div className="p-4 pt-2 pb-6">
            <h3 className='text-slate-700 font-semibold'>Rustic cheese and pepperoni pizza</h3>
          <div className='border-t border-slate-300 my-4'></div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <FaTasks /> <span> Easy</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaComment /> <span> 1</span>
            </div>
          </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={RecipeImage2} alt="Recipe Image 2" />
          </figure>
          <div className="p-4 pt-2 pb-6">
            <h3 className='text-slate-700 font-semibold'>Delicious and refreshing summer salad</h3>
            <div className='border-t border-slate-300 my-4'></div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <FaTasks /> <span> Easy</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaComment /> <span> 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={RecipeImage3} alt="Recipe Image 3" />
          </figure>
          <div className="p-4 pt-2 pb-6">
            <h3 className='text-slate-700 font-semibold'>Light and tasty vegetarian dinner</h3>
            <div className='border-t border-slate-300 my-4'></div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <FaTasks /> <span> Difficult</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaComment /> <span> 0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={RecipeImage4} alt="Recipe Image 4" />
          </figure>
          <div className="p-4 pt-2 pb-6">
            <h3 className='text-slate-700 font-semibold'>Ultimate vegetarian hamburger</h3>
            <div className='border-t border-slate-300 my-4'></div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <FaTasks /> <span> Medium</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaComment /> <span> 5</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestRecipes;