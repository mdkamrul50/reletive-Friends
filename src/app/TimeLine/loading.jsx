import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <FadeLoader color="#36d7b7" />
      <p className="text-xl mt-4">Loading...</p>
    </div>
  );
};

export default Loading;
