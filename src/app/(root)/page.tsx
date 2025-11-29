import React, { FC } from 'react';
import { Metadata } from 'next';

import { SideBar } from '../../components/SideBar';
import { ResponsiveProfile } from '../../components/ResponsiveProfile';
import { PageTitle } from '../../components/PageTitle';

export const metadata: Metadata = {
  title: 'トップページ',
  description: 'トップページ',
};

const MAIN_STYLES = 'pt-10 sm:px-20 pb-4 px-5';

const HomePageContent: FC = () => (
  <div className="w-full px-10 py-5 pb-10 mb-10 shadow-lg rounded-md bg-white dark:bg-slate-900">
    <PageTitle title="トップページ" />
    <p className="mt-16">Hukuryo-no-Blogへようこそ！</p>
    <p className="mt-8">
      このブログでは、プログラミングについての記事を中心とした記事を書いています。
    </p>
    <p className="mt-8">よろしくお願いします！</p>
  </div>
);

export default function Home() {
  return (
    <main className={MAIN_STYLES}>
      <div className="flex flex-row-reverse">
        <SideBar />
        <HomePageContent />
      </div>
      <ResponsiveProfile />
    </main>
  );
}
