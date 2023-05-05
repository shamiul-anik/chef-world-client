import React from 'react';
import { RiMailSendLine } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-20">
      <div className="mx-4 p-6 lg:p-12 rounded-lg box-shadow-custom mt-6">
        <header>
          <h2 className="content-title text-center">Subscribe to Our Newsletter</h2>
        </header>
        <p className='content-description text-center'>Subscribe to our newsletter & keep up with our latest recipes and organized workshops.</p>
        <div className="relative mt-6 mb-3 md:mb-7 max-w-xl mx-auto">
          <input type="text" placeholder="Enter your email address" className="input input-primary w-full pr-16" />
          <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
            <BsFillSendFill className='text-lg md:text-xl font-bold' />
            <span className='hidden md:block ml-2'> Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;