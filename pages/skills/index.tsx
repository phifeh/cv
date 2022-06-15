import styled from "@emotion/styled";
import { access } from "fs";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import Layout from "../../components/layout";
import { getSortedData } from "../../lib/getData";

const SkillCard = styled('div')`

` 
export default function Post({ allSkillsData }) {
  const skillsGrouped = useMemo(() =>allSkillsData.reduce((acc, cv) =>{ 
    for (const skill of cv.categories){
      acc[skill] = (acc[skill] ||[]).concat(cv)
    } 
    return acc},{}),[]);
  const [selectedCategory, setSelectedCategory] = useState('all')
  const selectOptions = useMemo(() =>['all',...Object.keys(skillsGrouped)],[])
  const filteredCategories = selectedCategory==="all"?allSkillsData : skillsGrouped[selectedCategory]
  return (
    <Layout>
      <h2>
 Here you can find the skills I have built up for <select value={selectedCategory} onChange={({target:{value}}) =>setSelectedCategory(value)}>{selectOptions.map((categorie) => <option key={categorie} >{categorie}</option>)} </select>
</h2>
{filteredCategories.map(({ id, description, title }) => (
          <SkillCard key={id}>
            <h4>
            <Link href={`/skills/${id}`}>
              <a>{title}</a>
            </Link>
</h4>
          <small>{description}</small>
          </SkillCard>

        ))}
      {/* <Head></Head> */}
    <pre>{JSON.stringify(skillsGrouped, null,2)}</pre>
    </Layout>
  );
}
export async function getStaticProps() {
  const allSkillsData =await getSortedData("skills");
  return {
    props: {
      allSkillsData,
    },
  };
}
