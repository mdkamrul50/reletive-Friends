import React from 'react';
import friends from '@/friendsData/friends.json';
import FriendData from '../FriendData/page';
export const metadata = {
  title: 'HomePage',
};

const YourFriends = () => {



  return (
    <div className="bg-gray-100 pt-8 pb-12">
      <h2 className='text-2xl font-semibold pb-4 container mx-auto px-3 md:px-0'>Your Friends</h2>
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-4 md:px-0 gap-6">
        {friends.map((friend) => {
          return (
            <div key={friend.id}>
              <FriendData friend={friend}></FriendData>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourFriends;
