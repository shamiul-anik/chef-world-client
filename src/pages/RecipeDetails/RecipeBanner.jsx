import React from 'react';
import ChefImage from '../../assets/images/chefs/chef1.jpg';

const RecipeBanner = ({ recipeDetails }) => {

  const { chef_name, chefs_biography, photo_url, years_of_experience, total_recipe_numbers, total_likes } = recipeDetails;
  
  return (
    <div className="bg-slate-100 mt-1">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto py-4 lg:py-12">
        <div className="p-4 basis-1/2">
          <img className="h-[400px] w-full object-cover object-top image-full rounded-xl shadow-lg" src={photo_url} alt={chef_name} />
        </div>
        <div className="p-4 basis-1/2 self-center">
          <header>
            <h3 className='text-4xl font-bold'>{chef_name}</h3>
          </header>
          <p className="text-slate-600 text-xl mt-4 mb-2 underline underline-offset-4 font-bold">Biography :</p>
          <p className='text-justify'>{chefs_biography}</p>

          <p className='mt-4'>
            <span className='font-bold underline text-lg underline-offset-4 text-slate-600'>Number of Recipes :</span>
            <span> {total_recipe_numbers}</span>
          </p>
          <p className='mt-2'>
            <span className='font-bold underline text-lg underline-offset-4 text-slate-600'>Years of Experience :</span>
            <span> {years_of_experience}</span>
          </p>

          <p className='mt-2'>
            <span className='font-bold underline text-lg underline-offset-4 text-slate-600'>Likes :</span>
            <span> {total_likes}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeBanner;