import { PageTitle } from '../../../../components/PageTitle';
import { ArticleList } from '../../../../components/ArticleList';
import { PageTracking } from '../../../../components/PageTracking';
import { Layout } from '../../../../components/Layout';
import { SideBar } from '../../../../components/SideBar';
import { ResponsiveProfile } from '../../../../components/ResponsiveProfile';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Spinner } from '../../../../components/ui/Spinner';

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
