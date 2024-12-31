import Link from 'next/link';
import { SideBar } from '@/components/SideBar';
import { PageTitle } from '@/components/PageTitle';
import { PageTracking } from '@/components/PageTracking';
import { ResponsiveProfile } from '@/components/ResponsiveProfile';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'プロフィール',
  description: 'プロフィール',
};

const SectionTitle = ({ title }: { title: string }) => (
  <p className="text-center mb-7 font-bold">{title}</p>
);

const InfoLine = ({ children }: { children: ReactNode }) => (
  <p className="mb-7 border-b-4 border-gray-400">{children}</p>
);

const ProfileLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <li className="mb-3">
    ・{' '}
    <Link
      className="text-lg text-blue-500 hover:underline dark:text-white"
      href={href}
      target="blank"
    >
      {children}
    </Link>
  </li>
);

const ProfileSection = () => (
  <div className="border border-slate-300 h-72 shadow-md sm:w-4/5 px-5 pt-8 mb-10 drop-shadow-md">
    <SectionTitle title="経歴紹介" />
    <InfoLine>2021年3月 大学卒業</InfoLine>
    <InfoLine>2021年4月 鉄道会社に就職</InfoLine>
    <InfoLine>2022年11月~ エンジニアに転職</InfoLine>
  </div>
);

export default function Page() {
  return (
    <>
      <PageTracking pass="profile" pageTitle="プロフィール紹介" />
      <main className="pt-10 sm:px-20 pb-48 px-5">
        <div className="flex flex-row-reverse">
          <SideBar />
          <div className="w-full px-10 py-5 pb-10 shadow-lg rounded-md bg-white dark:bg-slate-900">
            <PageTitle title="プロフィール紹介" />
            <p className="mt-16">
              このページでは筆者の経歴などについて紹介します。
            </p>
            <div className="mt-16">
              <ProfileSection />
              <p className="mb-10">千葉県民です。今も千葉県在住です。</p>
              <p className="mb-10">大学まで野球をやっていました。</p>
              <p className="mb-12">
                趣味はスポーツ観戦、映画鑑賞、漫画を読むこと
              </p>
              <PageTitle title="アウトプット" />
              <ul>
                <ProfileLink href="https://qiita.com/hukuryo">
                  Qiita
                </ProfileLink>
                <ProfileLink href="https://zenn.dev/ryohei0509">
                  Zenn
                </ProfileLink>
                <ProfileLink href="https://github.com/hukuryo">
                  GitHub
                </ProfileLink>
                <ProfileLink href="https://twitter.com/hukuryo_">
                  Twitter(X)
                </ProfileLink>
              </ul>
            </div>
          </div>
        </div>
        <ResponsiveProfile />
      </main>
    </>
  );
}
