import Layout from "../../components/layout";
import { getAllIds, getDetailData, getTechnologyInStacks } from "../../lib/getData";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export default function Skill({ postData, stacks , title}) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <div></div>
        {postData?.contentHtml ? <div dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />: postData?.description}
      </article>
      {/* <pre>{JSON.stringify(stacks, null,2)}</pre> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllIds("technologies");
  return {
    paths,
    fallback:true ,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getDetailData("technologies", params.id).catch(console.error);
  const stacks = getTechnologyInStacks(params.id)
  return {
    props: {
      title: params.id,
      postData: postData||null,
      stacks
    },
  };
}
