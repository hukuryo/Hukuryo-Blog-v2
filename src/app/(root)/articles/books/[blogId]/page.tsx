import { SideBar } from '@/src/components/SideBar';
import { PageTracking } from '@/src/components/PageTracking';
import { ArticleContent } from '@/src/types/article';
import { ArticlePageLayout } from '@/src/components/ArticlePageLayout';
import { DetailBody } from '@/src/components/articleDetail/DetailBody';
import { blogDetailData } from '@/src/lib/microcms';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Spinner } from '@/src/components/ui/Spinner';

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
        pass={'books'}
        pageTitle={'読んだ本'}
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
