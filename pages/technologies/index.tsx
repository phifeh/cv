import styled from "@emotion/styled";
import { access } from "fs";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import Layout from "../../components/layout";
import { Card, Select } from "../../components/ui";
import { getSortedData } from "../../lib/getData";



export default function Post({ allTechnologiesData }) {
  const technologiesGrouped = useMemo(
    () =>
      allTechnologiesData.reduce((acc, cv) => {
        for (const skill of cv.categories) {
          acc[skill] = (acc[skill] || []).concat(cv);
        }
        return acc;
      }, {}),
    []
  );
  const [selectedCategory, setSelectedCategory] = useState("all");
  const selectOptions = useMemo(
    () => ["all", ...Object.keys(technologiesGrouped)],
    []
  );
  const filteredCategories =
    selectedCategory === "all"
      ? allTechnologiesData
      : technologiesGrouped[selectedCategory];
  return (
    <Layout>
      <h3>
        Here you can find a list of relevant technologies I have been using over the years:{" "}
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
            <Link href={`/technologies/${id}`}>
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
  const allTechnologiesData = await getSortedData("technologies");
  return {
    props: {
      allTechnologiesData,
    },
  };
}
