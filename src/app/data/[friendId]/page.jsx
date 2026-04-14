import React from 'react';
import friends from '@/friendsData/friends.json';

const FriendInfo = async ({ params }) => {
  const { friendId } = await params;
  const friend = friends.find((friendIn) => friendIn.id == friendId);
  console.log("this is friend" ,friend);
  return (
    <div>
      <h2>{friendId}</h2>
    </div>
  );
};

export default FriendInfo;
