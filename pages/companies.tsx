import Layout from "../components/layout";
import { Card } from "../components/ui";
import { getSortedData } from "../lib/getData";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import styled from "@emotion/styled";

const A = styled('a')`
  margin-right: 0.5rem;
text-decoration: underline;
`

export default function CompaniesPage({ companies }) {
  return (
    <Layout>
      <h2>Work experience</h2>
      {companies.map(({ id, company,startDate, endDate,contentHTML, stack }) => (
        <Card
          key={id}
        >
<h3>{company} ({format(new Date(startDate), 'MMMM yyyy')}{endDate && ` - ${format(new Date(endDate), 'MMMM yyyy')}`})</h3>
<div 


          dangerouslySetInnerHTML={{ __html: contentHTML }}
></div>

{stack && <small><strong>Stack:</strong> {stack.map((technology) =><A href={`technologies/${technology}`}>{technology}</A>)}</small>}



        </Card>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const companies = await getSortedData("companies", true, '-startDate');
  return { props: { companies } };
}
