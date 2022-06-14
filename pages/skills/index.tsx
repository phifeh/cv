import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getSortedData } from "../../lib/getData";

export default function Post({ allSkillsData }) {
  return (
    <Layout>
      <ul>
        {allSkillsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/skills/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
          </li>
        ))}
      </ul>
      <Head></Head>
      <article></article>
    </Layout>
  );
}
export async function getStaticProps() {
  const allSkillsData = getSortedData("skills");
  return {
    props: {
      allSkillsData,
    },
  };
}
