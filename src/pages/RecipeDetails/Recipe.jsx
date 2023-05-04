import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Recipe = () => {

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(true);
    toast.success("Added as favorite recipe!");
  };

  return (
    <div className="flex card card-compact w-full bg-base-100 shadow-xl">
      <div className="flex-1 p-4 pt-4 pb-1">
        <h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Recipe Name</h3>
        <div>
          <p className='text-slate-700 font-bold underline text-lg underline-offset-4 mt-3 mb-1'>Ingredients :</p>
          <ul className='list-disc'>
            <li className='ml-5'>Ingredient 1</li>
            <li className='ml-5'>Ingredient 2</li>
            <li className='ml-5'>Ingredient 3</li>
            <li className='ml-5'>Ingredient 4</li>
            <li className='ml-5'>Ingredient 5</li>
          </ul>
        </div>
        <div>
          <p className='text-slate-700 font-bold underline text-lg underline-offset-4 mt-3 mb-1'>Cooking Method :</p>
          <p>Cooking method texts here...</p>
        </div>
      </div>

      <div className='border-t border-slate-300 my-4'></div>
      <div className="p-4 pt-0">
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Rating style={{ maxWidth: 120 }} value={4.5} readOnly /> 
            <span className='text-sm'> 4.5</span>
          </div>
          { 
            favorite ? 
              <button className="tooltip hover:pointer-events-none" disabled data-tip="Added to Favorite">
                <FaHeart className='text-xl text-red-500' />
              </button> :
              <button onClick={handleFavorite} className="tooltip hover:cursor-pointer" data-tip="Add to Favorite">
                <FaRegHeart className='text-xl text-slate-700' />
              </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Recipe;