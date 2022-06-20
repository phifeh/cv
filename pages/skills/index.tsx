import styled from "@emotion/styled";
import { access } from "fs";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import Layout from "../../components/layout";
import { Card, Select } from "../../components/ui";
import { getSortedData } from "../../lib/getData";



export default function Post({ allSkillsData }) {
  const skillsGrouped = useMemo(
    () =>
      allSkillsData.reduce((acc, cv) => {
        for (const skill of cv.categories) {
          acc[skill] = (acc[skill] || []).concat(cv);
        }
        return acc;
      }, {}),
    []
  );
  const [selectedCategory, setSelectedCategory] = useState("all");
  const selectOptions = useMemo(
    () => ["all", ...Object.keys(skillsGrouped)],
    []
  );
  const filteredCategories =
    selectedCategory === "all"
      ? allSkillsData
      : skillsGrouped[selectedCategory];
  return (
    <Layout>
      <h3>
        Here you can find a list of relevant skills I have been working on over the years:{" "}
        <Select
          value={selectedCategory}
          onChange={({ target: { value } }) => setSelectedCategory(value)}
        >
          {selectOptions.map((categorie) => (
            <option key={categorie}>{categorie}</option>
          ))}{" "}
        </Select>
      </h3>
      {filteredCategories.map(({ id, description, title }) => (
        <Card key={id}>
          <h4>
            <Link href={`/skills/${id}`}>
              <a>{title}</a>
            </Link>
          </h4>
          <small>{description}</small>
        </Card>
      ))}
      {/* <Head></Head> */}
    </Layout>
  );
}
export async function getStaticProps() {
  const allSkillsData = await getSortedData("skills");
  return {
    props: {
      allSkillsData,
    },
  };
}
