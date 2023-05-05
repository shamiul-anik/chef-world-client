import React from 'react';
import { FaComments, FaImage, FaPenFancy } from 'react-icons/fa';
import { TbChefHat } from "react-icons/tb";
import { RiArticleLine } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Statistics = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4">
      <header>
        <h2 className="content-title text-center">Statistics</h2>
      </header>
      <p className="content-description text-center mt-4">
        Details information about Chef World.
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-8">
        
        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <TbChefHat className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-4 pt-2 pb-6 text-center">
            <h2 className="card-title justify-center text-3xl font-bold text-blue-500">42</h2>
            <p className='text-slate-700 font-semibold'>Members</p>
          </div>
        </div>
        
        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <BiFoodMenu className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-4 pt-2 pb-6 text-center">
            <h2 className="card-title justify-center text-3xl font-bold text-blue-500">16</h2>
            <p className='text-slate-700 font-semibold'>Recipes</p>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <FaImage className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-4 pt-2 pb-6 text-center">
            <h2 className="card-title justify-center text-3xl font-bold text-blue-500">127</h2>
            <p className='text-slate-700 font-semibold'>Photos</p>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <FaPenFancy className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-4 pt-2 pb-6 text-center">
            <h2 className="card-title justify-center text-3xl font-bold text-blue-500">13</h2>
            <p className='text-slate-700 font-semibold'>Forums Posts</p>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <FaComments className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-4 pt-2 pb-6 text-center">
            <h2 className="card-title justify-center text-3xl font-bold text-blue-500">56</h2>
            <p className='text-slate-700 font-semibold'>Comments</p>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <RiArticleLine className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-4 pt-2 pb-6 text-center">
            <h2 className="card-title justify-center text-3xl font-bold text-blue-500">12</h2>
            <p className='text-slate-700 font-semibold'>Articles</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/" className="primary-button-lg !px-16">Join Us</Link>
      </div>
    </section>
  );
};

export default Statistics;