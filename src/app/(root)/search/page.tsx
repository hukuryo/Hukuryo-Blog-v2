import { PageTitle } from '@/src/components/PageTitle';
import { SearchArticleList } from '@/src/components/SearchArticleList';
import { PageTracking } from '@/src/components/PageTracking';
import { Layout } from '@/src/components/Layout';
import { SideBar } from '@/src/components/SideBar';
import { ResponsiveProfile } from '@/src/components/ResponsiveProfile';
import { Metadata } from 'next';

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const getSearchQuery = (
  searchParams: SearchPageProps['searchParams'],
): string => {
  const s = searchParams.s;
  return Array.isArray(s) ? s[0] : s || '';
};

const generatePageTitle = (searchQuery: string): string =>
  searchQuery ? `「${searchQuery}」の検索結果` : '記事の検索';

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const searchQuery = getSearchQuery(searchParams);
  const pageTitle = generatePageTitle(searchQuery);

  return {
    title: pageTitle,
    description: `${pageTitle}を表示します`,
  };
}

export default function Page({ searchParams }: SearchPageProps) {
  const searchQuery = getSearchQuery(searchParams);
  const pageTitle = generatePageTitle(searchQuery);

  return (
    <>
      <PageTracking pass="search" pageTitle={pageTitle} />
      <Layout>
        <PageTitle title={pageTitle} />
        <div className="md:flex justify-between">
          <SearchArticleList searchQuery={searchQuery} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
