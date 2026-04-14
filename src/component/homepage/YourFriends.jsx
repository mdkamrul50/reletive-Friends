

import React, { useEffect, useState } from 'react';

const YourFriends = () => {
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchingDat = async () => {
      const res = await fetch('/friends.json');
      const data = await res.json();
      setFriendsData(data);
      setLoading(false);
    };
    fetchingDat();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(friendsData);

  return <div></div>;
};

export default YourFriends;
