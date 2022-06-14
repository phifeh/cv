import Layout from "../components/layout";
import { getSortedData } from "../lib/getData";

export default function CompaniesPage({ companies }) {
  return (
    <Layout>
      <h2>
        Companies I have worked for{" "}
        {companies.map(({ id }) => (
          <article dangerouslySetInnerHTML={companies.contentTML}></article>
        ))}
      </h2>
    </Layout>
  );
}

export async function getStaticProps() {
  const companies = await getSortedData("companies", true);
  return { props: { companies } };
}
