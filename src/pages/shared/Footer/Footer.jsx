import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-10 bg-slate-800 text-slate-100 mt-8 lg:mt-32">
      <div className="footer max-w-7xl mx-auto grid gap:8 lg:gap-28 lg:grid-cols-4">
        <div className="col-span-2">
          <h3 className="text-3xl text-slate-50 font-bold">Chef World</h3>
          <p className="text-justify mt-2 mb-4">If you have any questions or feedback about anything, please don&apos;t hesitate to contact us. We're here to help you with the best answers of you questions.</p>
          <div className="grid grid-flow-col gap-4">
            <Link className="cursor-pointer transition duration-200 transform hover:-translate-y-2 border rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
            <Link className="cursor-pointer transition duration-200 transform hover:-translate-y-2 border rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
            <Link className="cursor-pointer transition duration-200 transform hover:-translate-y-2 border rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Recent Recipes</span>
          <Link className="link link-hover">Biriani</Link>
          <Link className="link link-hover">Kachchhi</Link>
          <Link className="link link-hover">Curry</Link>
          <Link className="link link-hover">Fried Rice</Link>
        </div>
        {/* <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Work</Link>
          <Link className="link link-hover">Latest News</Link>
          <Link className="link link-hover">Help Desk</Link>
        </div> */}
        <div>
          <span className="footer-title">Contact</span>
          <p>Email: recipes@chef.com</p>
          <p>Dhaka, Bangladesh</p>
          <p>+1 777-978-5570</p>
        </div>
      </div>
      <div className="max-w-7xl text-sm lg:text-base mx-auto mt-8 pt-6 border-t flex flex-col gap-2 lg:flex-row justify-between items-center">
        <p>@2023 Chef World. All Rights Reserved</p>
        <p>Powered by <Link to="/" className="link link-hover">Chef World</Link></p>
      </div>
    </footer>
  );
};

export default Footer;