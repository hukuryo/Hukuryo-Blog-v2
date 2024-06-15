import Head from "next/head";
import { client } from "../lib/client";

import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import ArticleList from "../components/ArticleList";
import { SideBar } from "@/app/components/SideBar";
import { Layout } from "@/app/components/Layout";
import { PageTracking } from "@/app/components/PageTracking";

import { ArticleProps } from "../types/article";
import { ResponsiveProfile } from "@/app/components/ResponsiveProfile";


export default function Article() {

  return (
    <>
      <Head>
        <title>技術記事一覧</title>
      </Head>
      <PageTracking pass={"tech"} pageTitle={"技術記事"} />
      <Layout>
        <PageTitle title={"技術記事"} />
        <div className="md:flex justify-between">
          <ArticleList pass={"tech"} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
