import Head from "next/head";

import { SideBar } from "../../components/SideBar";
import { PageTracking } from "@/app/components/PageTracking";
import { ArticleContent } from "../../types/article";
import { ArticlePageLayout } from "@/app/components/ArticlePageLayout";
import { DetailBody } from "../../components/articleDetail/DetailBody";
import { blodDetailData } from "@/app/lib/microcms";

export default async function Page({ params }: { params: { blogId: string } }) {

  const blogData: ArticleContent = await blodDetailData(params.blogId);

  return (
    <>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <PageTracking
        pass={"hobby"}
        pageTitle={"趣味"}
        articleTitle={blogData.title}
        articlePass={blogData.id}
      />
      <ArticlePageLayout>
        <SideBar />
        <DetailBody blog={blogData} />
      </ArticlePageLayout>
    </>
  );
}