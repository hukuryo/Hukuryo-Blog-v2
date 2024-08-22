import { PageTitle } from '@/components/PageTitle';
import ArticleList from '@/components/ArticleList';
import { Layout } from '@/components/Layout';
import { PageTracking } from '@/components/PageTracking';
import { SideBar } from '@/components/SideBar';
import { ResponsiveProfile } from '@/components/ResponsiveProfile';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Spinner } from '@/components/ui/spinner';

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
