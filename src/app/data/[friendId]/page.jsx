import React from 'react';
import friends from '@/friendsData/friends.json';
import Image from 'next/image';
import { LuPhoneCall } from 'react-icons/lu';
import { BsChatRightTextFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { GoBellFill } from 'react-icons/go';
import { FaBoxArchive } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import ContactBtnToggle from '@/component/contactdetail/ContactBtnToggle';

export const metadata = {
  title: 'Friend Information',
};

const FriendInfo = async ({ params }) => {
  const today = new Date();
  const { friendId } = await params;
  const friend = friends.find((friendIn) => friendIn.id == friendId);
  console.log("this is friend" ,friend);
  return (
    <div className="bg-gray-100 py-20 ">
      <div className="container mx-auto flex gap-10 justify-center">
        <div>
          <div className="py-7 px-22 bg-white shadow-sm flex justify-center items-center text-center rounded-xl ">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Image
                  className="rounded-full"
                  src={friend.picture}
                  height={120}
                  width={120}
                  alt="img"
                />
              </div>
              <h2 className="text-xl font-bold ">{friend.name}</h2>

              <div className="flex flex-col justify-center items-center gap-3">
                <div className="badge badge-soft badge-success rounded-full pb-1 font-semibold">
                  {friend.tags[1]}
                </div>
                <p
                  className={`badge  rounded-full text-white pb-1 ${friend.status === 'overdue' ? 'badge-error' : 'badge-warning'} ${friend.status === 'on-track' && 'bg-green-800'}`}
                >
                  {friend.status}
                </p>
              </div>
              <p className="text-xl italic font-semibold text-gray-400">
                "{friend.tags[0]}, {friend.tags[1]}"
              </p>
              <span className="font-semibold text-gray-500">
                Preferred: {friend.email}
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="flex items-center p-4 bg-white text-center justify-center rounded-xl font-bold text-gray-600 shadow-sm btn">
              <GoBellFill /> Snooze 2 weeks
            </p>
            <p className="flex items-center p-4 bg-white text-center justify-center rounded-xl font-bold text-gray-600 shadow-sm btn">
              <FaBoxArchive /> Archive
            </p>
            <p className="flex items-center p-4 bg-white text-center justify-center rounded-xl font-bold text-xl  text-red-400 shadow-sm btn">
              <MdDelete /> Delete
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-6">
            <div className="shadow-sm rounded-xl bg-white text-center p-10 space-y-2">
              <span className="text-3xl font-bold text-green-900">
                {friend.days_since_contact}
              </span>
              <p className="text-xl font-semibold text-gray-400">
                Days Since Contact
              </p>
            </div>
            <div className="shadow-sm rounded-xl bg-white text-center p-10 space-y-2">
              <span className="text-3xl font-bold text-green-900">
                {friend.goal}
              </span>
              <p className="text-xl font-semibold text-gray-400">Goal (Days)</p>
            </div>
            <div className="shadow-sm rounded-xl bg-white text-center p-10 space-y-3 ">
              <span className="text-3xl font-bold text-green-900">
                {today.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <p className="text-xl font-semibold text-gray-400">Next Due</p>
            </div>
          </div>
          <div className="mt-6 bg-white p-5 rounded-xl">
            <div className="flex justify-between">
              <h4 className="text-2xl font-semibold text-green-950">
                Relationship Goal
              </h4>
              <button className="btn">Edit</button>
            </div>
            <p className="font-semibold text-gray-500 text-xl">
              Connect every{' '}
              <span className="text-black font-bold">{friend.goal} days</span>
            </p>
          </div>
          <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <h4 className="pb-4 text-xl font-semibold text-green-900">
              Quick Check-In
            </h4>

            <ContactBtnToggle friend={friend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendInfo;
