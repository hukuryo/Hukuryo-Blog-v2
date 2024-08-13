import { Metadata } from 'next';
import { PageTitle } from '../../components/PageTitle';
import ArticleList from '../../components/ArticleList';
import { SideBar } from '@/app/components/SideBar';
import { Layout } from '@/app/components/Layout';
import { PageTracking } from '@/app/components/PageTracking';

import { ResponsiveProfile } from '@/app/components/ResponsiveProfile';
import { Suspense } from 'react';
import { Spinner } from '@/app/components/ui/spinner';

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
