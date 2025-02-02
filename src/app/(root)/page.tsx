import React, { FC } from 'react';
import { Metadata } from 'next';
import { PageTitle } from '@/src/components/PageTitle';
import { SideBar } from '@/src/components/SideBar';
import { ResponsiveProfile } from '@/src/components/ResponsiveProfile';

export const metadata: Metadata = {
  title: 'トップページ',
  description: 'トップページ',
};

const MAIN_STYLES = 'pt-10 sm:px-20 pb-4 px-5';

interface TechStackProps {
  technologies: string[];
}

const TechStack: FC<TechStackProps> = ({ technologies }) => (
  <div className="mt-10">
    <div className="border max-w-md border-slate-300 rounded-md shadow-md sm:w-4/5 px-5 pt-8 pb-6 mb-10 text-gray-800 dark:text-white">
      <p className="text-2xl font-semibold mb-7">技術スタック</p>
      <ul className="list-disc pl-5">
        {technologies.map((tech, index) => (
          <li key={index} className="mb-3">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const technologies = ['Next.js', 'TypeScript', 'Tailwind CSS', 'MicroCMS'];

const HomePageContent: FC = () => (
  <div className="w-full px-10 py-5 pb-10 mb-10 shadow-lg rounded-md bg-white dark:bg-slate-900">
    <PageTitle title="トップページ" />
    <p className="mt-16">Hukuryo-no-Blogへようこそ！</p>
    <p className="mt-8">
      このブログでは、プログラミングについての記事を中心とした記事を書いています。
    </p>
    <p className="mt-8">よろしくお願いします！</p>
    <p className="mt-8">このブログは以下の技術スタックで作られています。</p>
    <TechStack technologies={technologies} />
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
