import React from 'react';
import { TbSoup } from 'react-icons/tb';
import { GiBarbecue, GiBowlOfRice, GiCookingPot, GiFishCooked, GiMeat, GiNoodles, GiTeapotLeaves, GiTreeBranch, GiWrappedSweet } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { BiDish } from "react-icons/bi";

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4">
      <header>
        <h2 className="content-title text-center">Recipe Categories</h2>
      </header>
      <p className="content-description text-center mt-4">
        Categories of recipes available in Chef World!
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-8">

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <TbSoup className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Soups</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiNoodles className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Noodles</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiBowlOfRice className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Rice</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <CiFries className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Stir-Fries</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <BiDish className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Sautéed Dishes</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiFishCooked className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Seafood</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiMeat className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Meat</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiTreeBranch className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Vegetables</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiCookingPot className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Hot Pot</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiBarbecue className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Barbecue</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiWrappedSweet className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Desserts</h2>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 box-shadow-custom">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiTeapotLeaves className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 mb-4 text-center">
            <h2 className="card-title justify-center text-xl font-bold text-blue-800">Teas</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;