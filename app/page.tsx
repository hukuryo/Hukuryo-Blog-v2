import { PageTitle } from './components/PageTitle';
import { SideBar } from '@/app/components/SideBar';
import { ResponsiveProfile } from '@/app/components/ResponsiveProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'トップページ',
  description: 'トップページ',
};

export default function Home() {
  return (
    <>
      <main className="pt-10 sm:px-20 pb-4 px-5">
        <div className="flex flex-row-reverse">
          <SideBar />
          <div className="w-full px-10 py-5 pb-10 mb-10 shadow-lg rounded-md bg-white">
            <PageTitle title={'トップページ'} />
            <p className="mt-16">Hukuryo-no-Blogへようこそ！</p>
            <p className="mt-8">
              このブログでは、プログラミングについての記事を中心とした記事を書いています。
            </p>
            <p className="mt-8">よろしくお願いします！</p>
            <p className="mt-8">
              このブログは以下の技術スタックで作られています。
            </p>
            <div className="mt-10">
              <div className="border max-w-md border-slate-300 rounded-md shadow-md sm:w-4/5 px-5 pt-8 pb-6 mb-10 text-gray-800 dark:text-white">
                <p className="text-2xl font-semibold mb-7">技術スタック</p>
                <ul className="list-disc pl-5">
                  <li className="mb-3">Next.js</li>
                  <li className="mb-3">TypeScript</li>
                  <li className="mb-3">Tailwind CSS</li>
                  <li className="mb-3">MicroCMS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ResponsiveProfile />
      </main>
    </>
  );
}
