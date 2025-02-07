import { SideBar } from '../../../../../components/SideBar';
import { PageTracking } from '../../../../../components/PageTracking';
import { ArticleContent } from '../../../../../types/article';
import { ArticlePageLayout } from '../../../../../components/ArticlePageLayout';
import { DetailBody } from '../../../../../components/articleDetail/DetailBody';
import { blogDetailData } from '../../../../../lib/microcms';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Spinner } from '../../../../../components/ui/Spinner';

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
        pass={'hobby'}
        pageTitle={'趣味'}
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
