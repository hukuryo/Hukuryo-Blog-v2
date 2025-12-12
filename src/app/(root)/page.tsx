import React, { FC } from 'react';
import { Metadata } from 'next';

import { SideBar } from '../../components/SideBar';
import { ResponsiveProfile } from '../../components/ResponsiveProfile';
import { PageTitle } from '../../components/PageTitle';
import { getProfileData } from '../../lib/microcms';

export const metadata: Metadata = {
  title: 'トップページ',
  description: 'トップページ',
};

const MAIN_STYLES = 'pt-10 sm:px-20 pb-4 px-5';

type HomePageContentProps = {
  profileContent: string;
};

const HomePageContent: FC<HomePageContentProps> = ({ profileContent }) => {
  return (
    <div className="w-full h-full px-10 py-5 pb-10 mb-10 shadow-lg rounded-md bg-white dark:bg-slate-900">
      <PageTitle title="トップページ" />
      {profileContent && (
        <div
          className="prose prose-slate dark:prose-invert max-w-none mb-10 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-p:leading-relaxed prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:bg-transparent prose-code:text-white prose-code:font-semibold prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: profileContent }}
        />
      )}
    </div>
  );
};

export default async function Home() {
  const profile = await getProfileData();
  const profileContent = profile?.contents[0]?.content || '';

  return (
    <main className={MAIN_STYLES}>
      <div className="flex flex-row-reverse items-stretch">
        <SideBar />
        <HomePageContent profileContent={profileContent} />
      </div>
      <ResponsiveProfile />
    </main>
  );
}
