import styled from "@emotion/styled";
import { access } from "fs";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import Layout from "../../components/layout";
import { getSortedData } from "../../lib/getData";

const SkillCard = styled("div")`
  padding: 0.25rem;
  padding-bottom: 0.75rem;
  border: 0.25rem solid var(--colors-primary-text);
  margin: 0.5rem;
  border-radius: 0.5rem;
  a {
    color: var(--colors-primary-text);
  }
  h4 {
    margin: 0.5rem 0;
  }
`;
const Select = styled("select")`
  option {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
  font-size: inherit;
  font-weight: inherit;
  border: none;
  border-bottom: 0.0125em solid var(--colors-primary-text);
  color: inherit;
  outline: none;
`;
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
      <h2>
        Here you can find the skills I have built up for category:{" "}
        <Select
          value={selectedCategory}
          onChange={({ target: { value } }) => setSelectedCategory(value)}
        >
          {selectOptions.map((categorie) => (
            <option key={categorie}>{categorie}</option>
          ))}{" "}
        </Select>
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
