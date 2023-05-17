import React from 'react';
import LazyLoad from 'react-lazy-load';
import { FaComment, FaTasks } from 'react-icons/fa';
import RecipeImage1 from '../../assets/images/recipes/shanghai-fried -noodles.jpg';
import RecipeImage2 from '../../assets/images/recipes/xiaolongbao.jpg';
import RecipeImage3 from '../../assets/images/recipes/egg-drop-soup.jpg';
import RecipeImage4 from '../../assets/images/recipes/mapo-tofu.jpg';

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

        <div className="flex card card-compact w-full bg-base-100 shadow-xl">
          <LazyLoad offset={500}>
            <figure>
              <img className='h-56 w-full object-cover rounded-xl' src={RecipeImage1} alt="Shanghai Fried Noodles" />
            </figure>
          </LazyLoad>
          <div className="flex-1 p-4 pt-4 pb-0">
            <h3 className='text-center text-xl text-slate-700 font-semibold'>Shanghai Fried Noodles</h3>
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

        <div className="flex card card-compact w-full bg-base-100 shadow-xl">
          <LazyLoad offset={500}>
            <figure>
              <img className='h-56 w-full object-cover rounded-xl' src={RecipeImage2} alt="Xiaolongbao" />
            </figure>
          </LazyLoad>
          <div className="flex-1 p-4 pt-4 pb-0">
            <h3 className='text-center text-xl text-slate-700 font-semibold'>Xiaolongbao</h3>
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

        <div className="flex card card-compact w-full bg-base-100 shadow-xl">
          <LazyLoad offset={500}>
            <figure>
              <img className='h-56 w-full object-cover rounded-xl' src={RecipeImage3} alt="Egg Drop Soup" />
            </figure>
          </LazyLoad>
          <div className="flex-1 p-4 pt-4 pb-0">
            <h3 className='text-center text-xl text-slate-700 font-semibold'>Egg Drop Soup</h3>
          </div>
          <div className='border-t border-slate-300 my-4'></div>
          <div className="p-4 pt-0">
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
        
        <div className="flex card card-compact w-full bg-base-100 shadow-xl">
          <LazyLoad offset={500}>
            <figure>
              <img className='h-56 w-full object-cover rounded-xl' src={RecipeImage4} alt="Mapo Tofu" />
            </figure>
          </LazyLoad>
          <div className="flex-1 p-4 pt-4 pb-0">
            <h3 className='text-center text-xl text-slate-700 font-semibold'>Mapo Tofu</h3>
          </div>
          <div className='border-t border-slate-300 my-4'></div>
          <div className="p-4 pt-0">
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