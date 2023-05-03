import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import PageNotFound from '../../assets/lottie/page-not-found-404.json';
import { FaArrowCircleLeft } from 'react-icons/fa';

const ErrorPage = () => {

  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col justify-center items-center h-[100dvh]">
      <Lottie className="max-w-4xl" animationData={PageNotFound} loop={true} />
      <p className="text-xl">
        <i className="text-red-600">{error?.data}</i>
        <i className="text-red-600">{error?.message}</i>
      </p>
      <div className="mt-12">
        <Link to="/">
          <button className='px-3 py-2 fs-5 font-bold'><FaArrowCircleLeft className='fs-5 me-1' /> Back to Main</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;