import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import MealImage1 from '../../assets/images/meals/meal1.jpg';
import MealImage2 from '../../assets/images/meals/meal2.jpg';
import MealImage3 from '../../assets/images/meals/meal3.jpg';
import MealImage4 from '../../assets/images/meals/meal4.jpg';
import MealImage5 from '../../assets/images/meals/meal5.jpg';
import MealImage6 from '../../assets/images/meals/meal6.jpg';

const Reward = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4">
      <header>
        <h2 className="content-title text-center">Share Your Meal and Get Reward</h2>
      </header>
      <p className="content-description text-center mt-4">
        Share the Photos of Your Meals on Instagram with <span className="highlighted-text font-bold">#chefworld</span> & We Will Reward the Meal of the Month!
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-8">
        <div>
          <LazyLoad offset={500}>
            <figure>
              <Link to="https://www.instagram.com/" target='_blank'>
                <img className='w-full rounded-lg border border-1 border-slate-300 box-shadow-custom transition-all delay-200 hover:-translate-y-2' src={MealImage1} alt="Meal Image 1" />
              </Link>
            </figure>
          </LazyLoad>
        </div>
        <div>
          <LazyLoad offset={500}>
            <figure>
              <Link to="https://www.instagram.com/" target='_blank'>
                <img className='w-full rounded-lg border border-1 border-slate-300 box-shadow-custom transition-all delay-200 hover:-translate-y-2' src={MealImage2} alt="Meal Image 2" />
              </Link>
            </figure>
          </LazyLoad>
        </div>
        <div>
          <LazyLoad offset={500}>
            <figure>
              <Link to="https://www.instagram.com/" target='_blank'>
                <img className='w-full rounded-lg border border-1 border-slate-300 box-shadow-custom transition-all delay-200 hover:-translate-y-2' src={MealImage3} alt="Meal Image 3" />
              </Link>
            </figure>
          </LazyLoad>
        </div>
        <div>
          <LazyLoad offset={500}>
            <figure>
              <Link to="https://www.instagram.com/" target='_blank'>
                <img className='w-full rounded-lg border border-1 border-slate-300 box-shadow-custom transition-all delay-200 hover:-translate-y-2' src={MealImage4} alt="Meal Image 4" />
              </Link>
            </figure>
          </LazyLoad>
        </div>
        <div>
          <LazyLoad offset={500}>
            <figure>
              <Link to="https://www.instagram.com/" target='_blank'>
                <img className='w-full rounded-lg border border-1 border-slate-300 box-shadow-custom transition-all delay-200 hover:-translate-y-2' src={MealImage5} alt="Meal Image 5" />
              </Link>
            </figure>
          </LazyLoad>
        </div>
        <div>
          <LazyLoad offset={500}>
            <figure>
              <Link to="https://www.instagram.com/" target='_blank'>
                <img className='w-full rounded-lg border border-1 border-slate-300 box-shadow-custom transition-all delay-200 hover:-translate-y-2' src={MealImage6} alt="Meal Image 6" />
              </Link>
            </figure>
          </LazyLoad>
        </div>
      </div>
    </section>
  );
};

export default Reward;