import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedData } from "../lib/getData";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h4>Hi,</h4>{" "}
        <p>
          my Name is Philip Fehervari. I am a Full-stack javascript developer{" "}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}></ul>
      </section>
    </Layout>
  );
}
