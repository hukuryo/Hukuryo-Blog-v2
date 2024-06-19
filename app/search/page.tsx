import { useRouter } from "next/router";
import { client } from "../lib/client";

import { PageTitle } from "../components/PageTitle";
import ArticleList from "../components/ArticleList";
import { SideBar } from "@/app/components/SideBar";
import { Layout } from "@/app/components/Layout";
import { PageTracking } from "@/app/components/PageTracking";
import { ResponsiveProfile } from "@/app/components/ResponsiveProfile";
import { ArticleContent } from "../types/article";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "記事を検索",
  description: "記事を検索"
};

export default async function Page() {
  const router = useRouter();
  const { s } = router.query;
  const articles = await client.get({ endpoint: "articles" });
  const queryText: string = Array.isArray(s) ? s[0] : s || "";

  const searchArticles = articles.filter((article: ArticleContent) =>
    article.title.includes(queryText)
  );

  return (
    <>
      {queryText.length === 0 ? (
        <PageTracking pass={"tech"} pageTitle={`検索結果`} />
      ) : (
        <PageTracking pass={"tech"} pageTitle={`「${queryText}」の検索結果`} />
      )}
      <Layout>
        {queryText.length === 0 ? (
          <PageTitle title={`検索結果`} />
        ) : (
          <PageTitle title={`「${queryText}」の検索結果`} />
        )}
        {searchArticles.length === 0 && (
          <>
            <p>該当する記事は見つかりませんでした。</p>
          </>
        )}
        <div className="md:flex justify-between">
          <ArticleList pass={"tech"} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
