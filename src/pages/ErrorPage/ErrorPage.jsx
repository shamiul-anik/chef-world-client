import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import PageNotFound from '../../assets/lottie/page-not-found-404.json';
import { FaArrowLeft } from 'react-icons/fa';
import { useTitle } from '../../hooks/useTitle';

const ErrorPage = () => {

  useTitle("Error");

  const error = useRouteError();
  // console.log(error);

  return (
    <div className="flex flex-col justify-center items-center min-h-[100dvh] p-16">
      <Lottie className="max-w-4xl" animationData={PageNotFound} loop={true} />
      <p className="text-xl">
        <i className="text-red-600">{error?.data}</i>
        <i className="text-red-600">{error?.message}</i>
      </p>
      <div className="mt-12">
        <Link to="/" className='flex gap-3 items-center w-64 justify-center primary-button-lg'><FaArrowLeft className='fs-5 me-1' /> Back to Main</Link>
      </div>
    </div>
  );
};

export default ErrorPage;