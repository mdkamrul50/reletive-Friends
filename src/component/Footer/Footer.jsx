import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="bg-[#245b49]">
      <div className="text-center pt-20 pb-11 space-y-4 border-b border-b-gray-500 container mx-auto px-3 md:px-0">
        <h3 className="md:text-7xl text-4xl font-bold text-white">KeenKeeper</h3>
        <p className="text-gray-300">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <h4 className="font-semibold text-xl text-white">Social Link</h4>
        <div className="flex  justify-center gap-2">
          <div className="bg-white p-2 rounded-full">
            <FaInstagram />
          </div>
          <div className="bg-white p-2 rounded-full">
            <FaFacebook />
          </div>
          <div className="bg-white p-2 rounded-full">
            <SiX />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between py-6">
        <div className="text-gray-400">
          © 2026 KeenKeeper. All rights reserved.
        </div>
        <div className=" flex md:gap-10 gap-3 px-2 md:px-0">
          <p className="text-gray-400">Privacy Policy</p>
          <p className="text-gray-400 hidden md:block"> Terms of Service</p>
          <p className="text-gray-400">Cookies</p>
        </div>
      </div>
    </div>
  );
}

export default Footer