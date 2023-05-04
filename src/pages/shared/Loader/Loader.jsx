import React from 'react';
import Lottie from "lottie-react";
import Loading from '../../../assets/lottie/loading.json';

const Loader = () => {
  return (
    <Lottie className="max-w-4xl mx-auto" animationData={Loading} loop={true} />
  );
};

export default Loader;