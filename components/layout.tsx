import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import Nav from "./nav";
import { SITE_NAME, SITE_TITLE } from "../data/skills/config";
const name = SITE_NAME;
export const siteTitle = SITE_TITLE;

const Container = styled("div")``;
export default function Layout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header>
        {(
          <>
            {/* <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link> */}
            
<Nav
        menu={[
          { title: "Skills", to: "/skills" },
          { title: "about", to: "/about" },
        ]}
      ></Nav>
          </>
        )}
      </header>
      <main>{children}</main>
      
    </Container>
  );
}
