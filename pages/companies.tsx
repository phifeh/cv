import Layout from "../components/layout";
import { Card } from "../components/ui";
import { getSortedData } from "../lib/getData";

export default function CompaniesPage({ companies }) {
  console.log({ companies });
  return (
    <Layout>
      <h3>Companies that I have worked for </h3>
      {companies.map(({ id, contentHTML }) => (
        <Card
          dangerouslySetInnerHTML={{ __html: contentHTML }}
          key={id}
        ></Card>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const companies = await getSortedData("companies", true, '-startDate');
  return { props: { companies } };
}
