import { PageTitle } from '../../components/PageTitle';
import ArticleList from '../../components/ArticleList';
import { PageTracking } from '@/app/components/PageTracking';
import { Layout } from '@/app/components/Layout';
import { SideBar } from '@/app/components/SideBar';
import { ResponsiveProfile } from '@/app/components/ResponsiveProfile';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Spinner } from '@/app/components/ui/spinner';

export const metadata: Metadata = {
  title: '趣味の記事一覧',
  description: '趣味の記事一覧',
};

export default function Page() {
  return (
    <>
      <PageTracking pass={'hobby'} pageTitle={'趣味'} />
      <Layout>
        <PageTitle title={'趣味'} />
        <div className="md:flex justify-between">
          <Suspense fallback={<Spinner />}>
            <ArticleList pass={'hobby'} />
          </Suspense>
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
