import React from 'react'

const Banner = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto text-center pt-20 ">
        <h2 className="text-5xl font-bold pb-5">
          Friends to keep close in your life
        </h2>
        <p className="text-gray-500 pb-5">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-green-900 text-white rounded-sm">
          + Add a Friend
        </button>
      </div>

      <div className="container mx-auto grid  grid-cols-4 gap-5 text-center my-8">
        <div className=" shadow-sm rounded-2xl py-12 bg-white">
          <p className="text-2xl font-bold pb-2 text-green-800">10</p>
          <p className="text-gray-500">Total Friend</p>
        </div>
        <div className="shadow-sm rounded-2xl py-12 bg-white">
          <p className="text-2xl font-bold pb-2 text-green-800">3</p>
          <p className="text-gray-500">On Track</p>
        </div>
        <div className="shadow-sm rounded-2xl py-12 bg-white">
          <p className="text-2xl font-bold pb-2 text-green-800">6</p>
          <p className="text-gray-500">Need Attention</p>
        </div>
        <div className="shadow-sm rounded-2xl py-12 bg-white">
          <p className="text-2xl font-bold pb-2 text-green-800">12</p>
          <p className="text-gray-500">Interactions This Month</p>
        </div>
      </div>
      
    </div>
    
  );
}

export default Banner;