'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoMdTime } from 'react-icons/io';
import { IoHomeOutline, IoReorderThreeOutline } from 'react-icons/io5';


const Navber = () => {
  const pathName = usePathname();
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-24 px-16 ">
      <div className="dropdown block md:hidden pr-3 md:pr-0">
        <div
          tabIndex={0}
          role="button"
          className=" flex m-1 text-3xl cursor-pointer"
        >
          <IoReorderThreeOutline />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
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
      <div className="flex-1 ">
        <a className=" text-xl font-bold">
          Keen<span className="text-green-900">Keeper</span>
        </a>
      </div>
      <div className="flex-non ">
        <ul className="menu menu-horizontal px-1 md:font-semibold font-normal text-sm hidden md:flex">
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
