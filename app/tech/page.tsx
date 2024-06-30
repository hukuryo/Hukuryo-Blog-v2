import { Metadata } from 'next';
import { PageTitle } from '../components/PageTitle';
import ArticleList from '../components/ArticleList';
import { SideBar } from '@/app/components/SideBar';
import { Layout } from '@/app/components/Layout';
import { PageTracking } from '@/app/components/PageTracking';

import { ResponsiveProfile } from '@/app/components/ResponsiveProfile';

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
          <ArticleList pass={'tech'} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
