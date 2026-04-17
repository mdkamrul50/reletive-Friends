'use client';

import { contactContext } from '@/context/Cotact.context';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const stats = () => {
  const { contactDetail } = useContext(contactContext);
  const textCount = contactDetail.filter((item) => item.type === 'text').length;
  const callCount = contactDetail.filter((item) => item.type === 'call').length;
  const videoCount = contactDetail.filter(
    (item) => item.type === 'video'
  ).length;
  const data = [
    { name: 'Text', value: textCount, fill: '#064E3B' },
    { name: 'Call', value: callCount, fill: '#6B21A8' },
    { name: 'Video', value: videoCount, fill: '#22C55E' },
  ];
  return (
    <div className=" bg-gray-100 ">
      <h3 className="container mx-auto md:text-4xl text-3xl font-bold pt-10 pb-6 px-3 md:px-0">
        Friendship Analytics
      </h3>
      <div className="md:p-12 p-8 container md:mx-auto mr-3 mt-6 mb-15 shadow-sm bg-white rounded-xl  ">
        <h4 className="text-xl font-semibold text-green-900">
          By Interaction Type
        </h4>{' '}
        <PieChart
          style={{
            width: '100%',
            maxWidth: '300px',
            maxHeight: '70vh',

            aspectRatio: 1,
            margin: 'auto',
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default stats;
