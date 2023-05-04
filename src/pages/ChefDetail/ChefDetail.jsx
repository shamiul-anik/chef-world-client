import React from 'react';
import { FaRegHeart, FaUserClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ChefDetail = ({ chefDetail }) => {

  const {id, chef_name, photo_url, years_of_experience, total_recipe_numbers, total_likes} = chefDetail;

  return (
    <div key={id} className="flex card card-compact w-full bg-base-100 shadow-xl">
      <figure className=''>
        <img className='h-96 w-full object-cover' src={photo_url} alt={chef_name} />
      </figure>
      <div className="flex-1 p-4 pt-4 pb-1 text-center">
        <h3 className='text-slate-700 text-2xl font-bold'>{chef_name}</h3>
        <p className='text-slate-700 mt-2'>Years of Experience: {years_of_experience}</p>
        <p className='text-slate-700 mt-1'>Total Recipes: {total_recipe_numbers}</p>
      </div>
      <div className="text-center mb-6 md:mt-6 md:mb-4">
        <Link to={`/details/${id}`} className="primary-button-md">View Details</Link>
      </div>
      <div className='border-t border-slate-300 my-4'></div>
      <div className="p-4 pt-0">
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <FaUserClock /> <span> {years_of_experience} years</span>
          </div>
          <div className='flex items-center gap-2'>
            <Link to="/"><FaRegHeart /></Link> <span> {total_likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetail;