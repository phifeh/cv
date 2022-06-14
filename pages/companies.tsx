import Layout from "../components/layout";
import { getSortedData } from "../lib/getData";

export default function CompaniesPage({ companies }) {
  console.log({ companies });
  return (
    <Layout>
      <h2>Companies that I have worked for </h2>
      {companies.map(({ id, contentHTML }) => (
        <article
          dangerouslySetInnerHTML={{ __html: contentHTML }}
          key={id}
        ></article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const companies = await getSortedData("companies", true);
  return { props: { companies } };
}
