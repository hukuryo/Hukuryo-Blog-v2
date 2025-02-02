import { PageTitle } from '@/src/components/PageTitle';
import { ArticleList } from '@/src/components/ArticleList';
import { Layout } from '@/src/components/Layout';
import { PageTracking } from '@/src/components/PageTracking';
import { SideBar } from '@/src/components/SideBar';
import { ResponsiveProfile } from '@/src/components/ResponsiveProfile';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Spinner } from '@/src/components/ui/spinner';

export const metadata: Metadata = {
  title: '読んだ本',
  description: '読んだ本',
};

export default async function Page() {
  return (
    <>
      <PageTracking pass={'books'} pageTitle={'読んだ本'} />
      <Layout>
        <PageTitle title={'読んだ本'} />
        <div className="md:flex justify-between">
          <Suspense fallback={<Spinner />}>
            <ArticleList pass={'books'} />
          </Suspense>
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
