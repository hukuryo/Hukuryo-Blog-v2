import Head from "next/head";
import { client } from "../lib/client";

import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import ArticleList from "../components/ArticleList";
import { PageTracking } from "@/app/components/PageTracking";
import { Layout } from "@/app/components/Layout";
import { SideBar } from "@/app/components/SideBar";
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

export default function books({ articles }: ArticleProps) {
  const hobbyArticles = articles.filter(
    (article) => article.kinds[0] === "hobby"
  );

  return (
    <>
      <Head>
        <title>趣味</title>
      </Head>
      <PageTracking pass={"hobbies"} pageTitle={"趣味"} />
      <Layout>
        <PageTitle title={"趣味"} />
        <div className="md:flex justify-between">
          <ArticleList articles={hobbyArticles} pass={"hobbies"} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
