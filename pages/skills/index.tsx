import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/skills";

export default function Post({ allPostsData }) {
  return (
    <Layout>
      <ul>
    {allPostsData.map(({ id, date, title }) => (
            <li  key={id}>
              <Link href={`/skills/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            </li>
          ))}
          </ul>
          <Head>
      </Head>
      <article>
        
      </article>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
