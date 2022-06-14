import Layout from "../../components/layout";
import { getAllIds, getDetailData } from "../../lib/getData";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export default function Skill({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}></div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllIds("skills");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getDetailData("skills", params.id);
  return {
    props: {
      postData,
    },
  };
}
