import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import Nav from "./nav";
import { SITE_NAME, SITE_TITLE } from "../data/config";
const name = SITE_NAME;
export const siteTitle = SITE_TITLE;

const Container = styled("div")`
  background: #efefea;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Main = styled("main")`
  background: white;
  border-radius: 0.5em;
  margin: 1em;
  padding: 1em 0.5em;
  max-width: var(--max-width);
  /* border: 1px solid var(--colors-primary-text); */
  box-shadow: 1px 2px 3px #6667;
`;
export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        {
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
                { title: "about", to: "/about" },
                { title: "skills", to: "/skills" },
                { title: "companies", to: " /companies" },
              ]}
            ></Nav>
          </>
        }
      </header>
      <Main>{children}</Main>
    </Container>
  );
}
