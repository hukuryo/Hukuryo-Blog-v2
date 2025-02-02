import { Metadata } from 'next';
import { PageTitle } from '@/src/components/PageTitle';
import { ArticleList } from '@/src/components/ArticleList';
import { SideBar } from '@/src/components/SideBar';
import { Layout } from '@/src/components/Layout';
import { PageTracking } from '@/src/components/PageTracking';

import { ResponsiveProfile } from '@/src/components/ResponsiveProfile';
import { Suspense } from 'react';
import { Spinner } from '@/src/components/ui/Spinner';

export const metadata: Metadata = {
  title: '技術記事一覧',
  description: '技術記事一覧',
};

export default function Page() {
  return (
    <>
      <PageTracking pass={'tech'} pageTitle={'技術記事'} />
      <Layout>
        <PageTitle title={'技術記事'} />
        <div className="md:flex justify-between">
          <Suspense fallback={<Spinner />}>
            <ArticleList pass={'tech'} />
          </Suspense>
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
