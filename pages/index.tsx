import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedData } from "../lib/getData";
import Link from "next/link";
import About from "./about";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    <About></About>
    </Layout>
  );
}
