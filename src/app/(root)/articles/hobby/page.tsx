import { PageTitle } from '@/src/components/PageTitle';
import { ArticleList } from '@/src/components/ArticleList';
import { PageTracking } from '@/src/components/PageTracking';
import { Layout } from '@/src/components/Layout';
import { SideBar } from '@/src/components/SideBar';
import { ResponsiveProfile } from '@/src/components/ResponsiveProfile';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Spinner } from '@/src/components/ui/spinner';

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
