'use client';

import contactInfoProvider, { contactContext } from '@/context/Cotact.context';
import React, { useContext, useState } from 'react';
import { BsChatRightTextFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { toast } from 'react-toastify';

const ContactBtnToggle = ({ friend }) => {
  const { contactDetail, setContactDetail } = useContext(contactContext);

  const handelContact = (type) => {
    setContactDetail([...contactDetail, { ...friend, type }]);
    toast.success(`${type}, from ${friend.name}`);
  };
  return (
    <div className="flex flex-col md:flex-row gap-5 px-4 md:px-0">
      <div
        onClick={() => handelContact('call')}
        className="rounded-xl shadow-sm p-5 bg-gray-100 text-center space-y-2 flex-1"
      >
        <p className="text-3xl font-bolder flex justify-center">
          <LuPhoneCall />
        </p>
        <p className="font-semibold">Call</p>
      </div>
      <div
        onClick={() => handelContact('text')}
        className="rounded-xl shadow-sm p-5 bg-gray-100 text-center space-y-2 flex-1"
      >
        <p className="text-3xl font-bolder flex justify-center">
          <BsChatRightTextFill />
        </p>
        <p className="font-semibold">Text</p>
      </div>
      <div
        onClick={() => handelContact('video')}
        className="rounded-xl shadow-sm p-5 bg-gray-100 text-center space-y-2 flex-1"
      >
        <p className="text-3xl font-bolder flex justify-center">
          <FaVideo />
        </p>
        <p className="font-semibold">Video</p>
      </div>
    </div>
  );
};

export default ContactBtnToggle;
