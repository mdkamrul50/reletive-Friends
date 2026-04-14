import Banner from '@/component/homepage/Banner';
import YourFriends from '@/component/homepage/YourFriends';
import Image from 'next/image';

export default function Home() {
  return (
    <div >
      <main>
       <Banner></Banner>
       <YourFriends></YourFriends>
      </main>
    </div>
  );
}
