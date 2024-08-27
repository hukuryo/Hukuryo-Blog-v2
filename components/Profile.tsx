import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileImage = () => (
  <div className="text-center flex justify-center mb-3">
    <Image
      src="/profile.png"
      alt="Profile Logo"
      className="my-1 rounded-full bg-white"
      width={80}
      height={100}
    />
  </div>
);

const ProfileButton = () => (
  <Link href="/profile" className="text-xs">
    <button className="shadow-lg text-xs ease-in-out duration-300 hover:bg-gray-400 hover:scale-105 bg-gray-500 shadow-gray-500/50 text-white rounded px-2 py-2">
      プロフィール
    </button>
  </Link>
);

export const Profile = () => {
  return (
    <div className="text-center lg:text-left border py-4 px-3 lg:w-60 rounded-lg shadow-md w-full bg-white dark:bg-slate-800">
      <ProfileImage />
      <h3 className="text-center mt-4 mb-7">Hukuryo</h3>
      <p className="mb-3 text-xs">
        2022/11~エンジニアになりました。
        <br />
        普段はフロント中心に勉強も頑張っています。
      </p>
      <div className="mb-10 mt-10 flex items-center justify-center">
        <ProfileButton />
      </div>
    </div>
  );
};
