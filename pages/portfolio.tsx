import Layout from "../components/layout";
import { Card } from "../components/ui";
import { getSortedData } from "../lib/getData";
import styled from '@emotion/styled'
const FlexRow = styled('div')`
  > *  {width:100%;}
  display:flex;
`
const Img  =styled('img')`
  max-height: 30rem;
  max-width: 100%;

`
export default function PortfolioPage({ portfolio }) {
  return (
    <Layout>
      <h2>Some personal projects</h2>
      {portfolio.map(({ id,title,url, contentHTML, image }) => (
        <Card
          key={id}
        >
<h2><a href={url}>{title}</a></h2>
{image && <a href={url}><Img src={image}></Img></a>}
<div 


          dangerouslySetInnerHTML={{ __html: contentHTML }}
></div>

        </Card>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const portfolio = await getSortedData("portfolio", true, '-startDate');
  return { props: { portfolio } };
}
