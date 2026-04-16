'use client';

import { contactContext } from '@/context/Cotact.context';
import React, { useContext, useState } from 'react';
import { BsChatText, BsFillCameraVideoFill } from 'react-icons/bs';
import { IoCall } from 'react-icons/io5';



const TimeLine = () => {
  
  const today = new Date();
  const { contactDetail, setContactDetail } = useContext(contactContext);
  const [filterType, setFilterType] = useState("all")

  let filterData = contactDetail;


  if (filterType !== 'all') {
    filterData = contactDetail.filter((item) => item.type === filterType);
  }

  return (
    <>
      <div className="bg-gray-100">
        <h2 className="text-4xl container mx-auto pt-12 font-bold pb-3">
          Timeline
        </h2>
        <div className="pl-46 pb-4">
          <div className="filter">
            <input
              className="btn filter-reset bg-gray-300 border-b border-b-blue-900"
              type="radio"
              name="metaframeworks"
              aria-label="All"
              onChange={() => setFilterType('all')}
            />
            <input
              className="btn border-b border-b-blue-900 "
              type="radio"
              name="metaframeworks"
              aria-label="Call"
              onChange={() => setFilterType('call')}
            />
            <input
              className="btn border-b border-b-blue-900 "
              type="radio"
              name="metaframeworks"
              aria-label="Text"
              onChange={() => setFilterType('text')}
            />
            <input
              className="btn border-b border-b-blue-900 px-6"
              type="radio"
              name="metaframeworks"
              aria-label="Video"
              onChange={() => setFilterType('video')}
            />
          </div>
        </div>
        {filterData.map((Info, ind) => {
          return (
            <div key={ind} className=" container mx-auto py-4">
              <div className="flex gap-3 items-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-4xl text-gray-800 pr-2">
                  {(Info.type === 'call' && <IoCall />) ||
                    (Info.type === 'text' && <BsChatText />) ||
                    (Info.type === 'video' && <BsFillCameraVideoFill />)}
                </p>
                <div>
                  <p className="text-xl text-gray-700">
                    <span className="pr-2 text-2xl font-semibold text-black">
                      {(Info.type === 'call' && 'Call') ||
                        (Info.type === 'text' && 'Text') ||
                        (Info.type === 'video' && 'Video')}
                    </span>
                    with {Info.name}
                  </p>
                  <span className="font-bold text-gray-500">
                    {today.toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TimeLine;
