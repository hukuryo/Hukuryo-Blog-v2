import Head from "next/head";
import { useRouter } from "next/router";
import { client } from "../lib/client";

import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import ArticleList from "../components/ArticleList";
import { SideBar } from "@/app/components/SideBar";
import { Layout } from "@/app/components/Layout";
import { PageTracking } from "@/app/components/PageTracking";
import { ArticleProps } from "../types/article";
import { ResponsiveProfile } from "@/app/components/ResponsiveProfile";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "articles" });

  return {
    props: {
      articles: data.contents,
    },
  };
};

export default function Search({ articles }: ArticleProps) {
  const router = useRouter();
  const { s } = router.query;
  const queryText: string = Array.isArray(s) ? s[0] : s || "";

  const searchArticles = articles.filter((article) =>
    article.title.includes(queryText)
  );

  return (
    <>
      <Head>
        <title>{`「${queryText}」の検索結果`}</title>
      </Head>
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
          <ArticleList articles={searchArticles} pass={"tech"} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
