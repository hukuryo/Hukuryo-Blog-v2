import { PageTitle } from '../components/PageTitle';
import SearchArticleList from '../components/SearchArticleList';
import { PageTracking } from '@/app/components/PageTracking';
import { Layout } from '@/app/components/Layout';
import { SideBar } from '@/app/components/SideBar';
import { ResponsiveProfile } from '@/app/components/ResponsiveProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '記事の検索',
  description: '記事の検索結果を表示します',
};

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ searchParams }: SearchPageProps) {
  const searchQuery = Array.isArray(searchParams.s)
    ? searchParams.s[0]
    : searchParams.s || '';

  const pageTitle = searchQuery ? `「${searchQuery}」の検索結果` : '記事の検索';

  return (
    <>
      <PageTracking pass="search" pageTitle={pageTitle} />
      <Layout>
        <PageTitle title={pageTitle} />
        <div className="md:flex justify-between">
          <SearchArticleList pass="search" searchQuery={searchQuery} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
