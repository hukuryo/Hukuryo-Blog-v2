import Head from "next/head";
import { PageTitle } from "../components/PageTitle";
import ArticleList from "../components/ArticleList";
import { Layout } from "@/app/components/Layout";
import { PageTracking } from "@/app/components/PageTracking";
import { SideBar } from "@/app/components/SideBar";
import { ResponsiveProfile } from "@/app/components/ResponsiveProfile";


export default async function page() {
  return (
    <>
      <Head>
        <title>読んだ本</title>
      </Head>
      <PageTracking pass={"books"} pageTitle={"読んだ本"} />
      <Layout>
        <PageTitle title={"読んだ本"} />
        <div className="md:flex justify-between">
          <ArticleList pass={"books"} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
