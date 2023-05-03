import React from 'react';

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-20">
      <div className="p-4 lg:p-12 rounded-lg box-shadow-custom mt-6">
        <header>
          <h2 className="content-title text-center">Subscribe to Our Newsletter</h2>
        </header>
        <p className='content-description text-center'>Subscribe to our newsletter & keep up with our latest recipes and organized workshops.</p>
        {/* <div className='flex gap-2 items-center mt-4 max-w-xl mx-auto'>
            <input type="email" placeholder="Enter your email address" className="input input-bordered input-primary w-full" />
            <Link to="/" className="subscribe-btn primary-button-md">Subscribe</Link>
          </div> */}
        <div className="relative mt-4 mb-7 max-w-xl mx-auto">
          <input type="text" placeholder="Enter your email address" className="input input-primary w-full pr-16" />
          <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;