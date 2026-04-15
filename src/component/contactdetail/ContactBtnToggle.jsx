"use client"

import contactInfoProvider from '@/context/cotact.context';
import React, { useContext } from 'react'
import { BsChatRightTextFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';

const ContactBtnToggle = ({friend}) => {

   const { contactDetail, setContactDetail } = useContext(contactInfoProvider);
   console.log(contactDetail,  'sumthing');

  const handelContact = ()=>{
    console.log('contact added');
    setContactDetail([...contactDetail, friend]);
  }
  return (
    <div className="flex gap-5">
      <div
        onClick={handelContact}
        className="rounded-xl shadow-sm p-5 bg-gray-100 text-center space-y-2 flex-1"
      >
        <p className="text-3xl font-bolder flex justify-center">
          <LuPhoneCall />
        </p>
        <p className="font-semibold">Call</p>
      </div>
      <div
        onClick={handelContact}
        className="rounded-xl shadow-sm p-5 bg-gray-100 text-center space-y-2 flex-1"
      >
        <p className="text-3xl font-bolder flex justify-center">
          <BsChatRightTextFill />
        </p>
        <p className="font-semibold">Text</p>
      </div>
      <div
        onClick={handelContact}
        className="rounded-xl shadow-sm p-5 bg-gray-100 text-center space-y-2 flex-1"
      >
        <p className="text-3xl font-bolder flex justify-center">
          <FaVideo />
        </p>
        <p className="font-semibold">Video</p>
      </div>
    </div>
  );
}

export default ContactBtnToggle