import { Metadata } from 'next';
import { PageTitle } from '../../../../components/PageTitle';
import { ArticleList } from '../../../../components/ArticleList';
import { SideBar } from '../../../../components/SideBar';
import { Layout } from '../../../../components/Layout';
import { PageTracking } from '../../../../components/PageTracking';

import { ResponsiveProfile } from '../../../../components/ResponsiveProfile';
import { Suspense } from 'react';
import { Spinner } from '../../../../components/ui/Spinner';

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
