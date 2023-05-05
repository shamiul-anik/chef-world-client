import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import LazyLoad from 'react-lazy-load';

const SingleRecipe = ({ recipe }) => {

  const [favorite, setFavorite] = useState(false);

  const { recipe_name, recipe_url, recipe_ingredients, cooking_method, rating } = recipe;

  const handleFavorite = () => {
    setFavorite(true);
    toast.success("Added as favorite recipe!");
  };

  return (
    <div className="flex card card-compact w-full bg-base-100 box-shadow-custom">
      <LazyLoad offset={300}>
        <figure>
          <img className='h-[400px] w-full rounded-t-2xl object-cover' src={recipe_url} alt={recipe_name} />
        </figure>
      </LazyLoad>
      <div className="flex-1 p-6 md:p-8 pt-4 pb-1 md:pb-2">
        <h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>{recipe_name}</h3>
        <div>
          <p className='text-slate-700 font-bold underline text-lg underline-offset-4 mt-3 mb-1'>Ingredients :</p>
          <ul className='list-disc'>
            {
              recipe_ingredients.map((ingredient, index) => <li key={index} className='ml-5'>{ingredient}</li>)
            }
          </ul>
        </div>
        <div>
          <p className='text-slate-700 font-bold underline text-lg underline-offset-4 mt-3 mb-1'>Cooking Method :</p>
          <p className='text-justify'>{cooking_method}</p>
        </div>
      </div>

      <div className='border-t border-slate-300 my-4'></div>
      <div className="p-6 md:p-8 pt-1 md:pt-2">
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
            <span className='text-sm'> {rating}</span>
          </div>
          {
            favorite ?
              <button className="flex gap-2 items-center tooltip hover:pointer-events-none" disabled data-tip="Added to Favorite">
                <FaHeart className='text-xl text-red-500' /> <span className="hidden md:block"> Added to Favorite</span>
              </button> :
              <button onClick={handleFavorite} className="flex gap-2 items-center tooltip hover:cursor-pointer" data-tip="Add to Favorite">
                <FaRegHeart className='text-xl text-slate-700' /> <span className="hidden md:block"> Add to Favorite</span>
              </button>
          }
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;