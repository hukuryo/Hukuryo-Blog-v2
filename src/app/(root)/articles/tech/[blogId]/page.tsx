import { SideBar } from '@/src/components/SideBar';
import { PageTracking } from '@/src/components/PageTracking';
import { ArticleContent } from '../../../../../types/article';
import { ArticlePageLayout } from '@/src/components/ArticlePageLayout';
import { DetailBody } from '@/src/components/articleDetail/DetailBody';
import { blogDetailData } from '@/src/lib/microcms';
import { Spinner } from '@/src/components/ui/spinner';

import { Metadata } from 'next';
import { Suspense } from 'react';

export const generateMetadata = async ({
  params,
}: {
  params: { blogId: string };
}): Promise<Metadata> => {
  const blogData: ArticleContent = await blogDetailData(params.blogId);

  return {
    title: blogData.title,
    description: blogData.title,
  };
};

export default async function Page({ params }: { params: { blogId: string } }) {
  const blogData: ArticleContent = await blogDetailData(params.blogId);

  return (
    <>
      <PageTracking
        pass={'tech'}
        pageTitle={'技術記事'}
        articleTitle={blogData.title}
        articlePass={blogData.id}
      />
      <ArticlePageLayout>
        <SideBar />
        <Suspense fallback={<Spinner />}>
          <DetailBody blog={blogData} />
        </Suspense>
      </ArticlePageLayout>
    </>
  );
}
