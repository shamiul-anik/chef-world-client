import React from 'react';
import { FaThumbsUp, FaUserClock } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ChefDetail = ({ chefDetail }) => {

  const {id, chef_name, photo_url, years_of_experience, total_recipe_numbers, total_likes} = chefDetail;

  return (
    <div className="flex card card-compact w-full bg-base-100 shadow-xl">
      <LazyLoad offset={300}>
        <figure>
          <img className='h-96 w-full rounded-t-2xl object-cover' src={photo_url} alt={chef_name} />
        </figure>
      </LazyLoad>
      <div className="flex-1 p-4 pt-4 pb-1 text-center">
        <h3 className='text-slate-700 text-2xl font-bold'>{chef_name}</h3>
        <p className='text-slate-700 mt-2'>Years of Experience: {years_of_experience}</p>
        <p className='text-slate-700 mt-1'>Total Recipes: {total_recipe_numbers}</p>
      </div>
      <div className="text-center mt-5 mb-6 md:mt-6 md:mb-4">
        <Link to={`/recipes/${id}`} className="primary-button-md">View Recipes</Link>
      </div>
      <div className='border-t border-slate-300 my-4'></div>
      <div className="p-4 pt-0">
        <div className='flex items-center justify-between'>
            <div className="flex gap-2 items-center tooltip" data-tip="Years of Experience">
              <FaUserClock /> <span> {years_of_experience} years</span>
            </div> 
            <div className="flex gap-2 items-center tooltip" data-tip="Total Likes">
              <FaThumbsUp /> <span> {total_likes}</span>
            </div> 
        </div>
      </div>
    </div>
  );
};

export default ChefDetail;