import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedData} from "../lib/getData";
import Link from "next/link";

export default function Home() {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Welcome to my resume site. </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          
        </ul>
      </section>
    </Layout>
  );
}

