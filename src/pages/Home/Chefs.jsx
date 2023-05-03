import React from 'react';
import { FaComment, FaTasks } from 'react-icons/fa';
import RecipeImage1 from '../../assets/images/recipes/recipe1.jpg';
import RecipeImage2 from '../../assets/images/recipes/recipe2.jpg';
import RecipeImage3 from '../../assets/images/recipes/recipe3.jpg';
import RecipeImage4 from '../../assets/images/recipes/recipe4.jpg';

const Chefs = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4">
      <header>
        <h2 className="content-title text-center">Our Chefs</h2>
      </header>
      <p className="content-description text-center mt-4">
        Meet our awesome chefs!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={RecipeImage1} alt="Recipe Image 1" />
          </figure>
          <div className="p-4 pt-2 pb-6">
            <h3 className='text-slate-700 font-semibold'>Name</h3>
            <p>Years of Experience</p>
            <p>Total Recipes: 4</p>
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

        <div className="flex card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={RecipeImage1} alt="Recipe Image 1" />
          </figure>
          <div className="flex-1 p-4 pt-2 pb-0">
            <h3 className='text-slate-700 font-semibold'>Name</h3>
            <p>Years of Experience</p>
            <p>Total Recipes: 4</p>
          </div>
          <div className='border-t border-slate-300 my-4'></div>
          <div className="p-4 pt-0">
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

      </div>
    </section>
  );
};

export default Chefs;