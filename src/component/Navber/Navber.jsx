'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoMdTime } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';


const Navber = () => {
  const pathName = usePathname();
  return (
    <div className="navbar bg-base-100 shadow-sm px-20">
      <div className="flex-1">
        <a className=" text-xl font-bold">
          Keen<span className="text-green-900">Keeper</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li
            className={`${pathName === '/' ? 'bg-green-800 text-white' : ''}`}
          >
            <Link href={'/'}>
              <IoHomeOutline />
              Home
            </Link>
          </li>
          <li
            className={`${pathName === '/TimeLine' ? 'bg-green-800 text-white' : ''}`}
          >
            <Link href={'/TimeLine'}>
              <IoMdTime />
              Timeline
            </Link>
          </li>
          <li
            className={`${pathName === '/stats' ? 'bg-green-800 text-white' : ''}`}
          >
            <Link href={'/stats'}>
              <ImStatsDots />
              Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
