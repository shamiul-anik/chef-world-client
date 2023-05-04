import React from 'react';
import ChefImage from '../../assets/images/chefs/chef1.jpg';

const RecipeBanner = () => {
  
  return (
    <div className="bg-slate-100 mt-1">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto py-4 lg:py-12">
        <div className="p-4 pb-0 basis-1/2">
          <img className="h-[400px] w-full object-cover object-top image-full rounded-xl shadow-lg" src={ChefImage} alt="Chef Name" />
        </div>
        <div className="p-4 basis-1/2 self-center">
          <header>
            <h3 className='text-4xl font-semibold'>Name</h3>
          </header>
          <p className="text-slate-600 text-xl mt-4 mb-2 underline underline-offset-4 font-bold">Biography :</p>
          <p>Biography texts here...</p>

          <p className='mt-4'>
            <span className='font-bold underline text-lg underline-offset-4 text-slate-600'>Number of Recipes :</span>
            <span> 6</span>
          </p>
          <p className='mt-2'>
            <span className='font-bold underline text-lg underline-offset-4 text-slate-600'>Years of Experience :</span>
            <span> 10</span>
          </p>

          <p className='mt-2'>
            <span className='font-bold underline text-lg underline-offset-4 text-slate-600'>Likes :</span>
            <span> 9000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeBanner;