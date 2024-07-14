import { PageTitle } from '../components/PageTitle';
import SearchArticleList from '../components/SearchArticleList';
import { PageTracking } from '@/app/components/PageTracking';
import { Layout } from '@/app/components/Layout';
import { SideBar } from '@/app/components/SideBar';
import { ResponsiveProfile } from '@/app/components/ResponsiveProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '趣味の記事一覧',
  description: '趣味の記事一覧',
};

export default function Page() {
  return (
    <>
      <PageTracking pass={'search'} pageTitle={'記事を検索'} />
      <Layout>
        <PageTitle title={'検索ページ'} />
        <div className="md:flex justify-between">
          <SearchArticleList pass={'search'} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
