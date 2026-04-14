import Image from 'next/image';
import React from 'react';

const FriendData = ({ friend }) => {
  return (
    <div className="p-6 bg-white shadow-sm flex justify-center items-center text-center rounded-xl">
      <div className="space-y-2">
        <Image
          className="rounded-full"
          src={friend.picture}
          height={120}
          width={120}
          alt="img"
        />
        <h2 className="text-xl font-bold ">{friend.name}</h2>
        <p className="text-gray-500">{friend.days_since_contact}d ago</p>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="badge badge-soft badge-success rounded-full pb-1 font-semibold">
            {friend.tags[1]}
          </div>
          <p
            className={`badge  rounded-full text-white pb-1 ${friend.status === 'overdue' ? 'badge-error' : 'badge-warning'} ${friend.status === 'on-track'&&"bg-green-800"}`}
          >
            {friend.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendData;
