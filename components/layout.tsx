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
  align-items:center;
    background: radial-gradient(#efefea, #abc2da, #f9c9d7);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 50s ease infinite;
    -moz-animation: AnimationName 50s ease infinite;
    animation: AnimationName 50s ease infinite;

@keyframes AnimationName {
    0%{background-position:42% 0%}
    50%{background-position:59% 100%}
    100%{background-position:42% 0%}
}
`;
const Main = styled("main")`
  background: white;
  border-radius: 0.5em;
  margin: 1em;
  padding: 1em 1.25em;
  max-width: var(--max-width);
  /* border: 1px solid var(--colors-primary-text); */
  box-shadow: 1px 2px 3px #6667;
  width:100%;
  height:100%;
  display:flex;flex-direction:column;
  overflow-y:auto ;
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
            <Nav
              menu={[
                // { title: "about", to: "/about" },
                { title: "skills", to: "/skills" },
                { title: "companies", to: " /companies" },
                { title: "portfolio", to: " /portfolio" },
              ]}
            ></Nav>
      <Main>{children}</Main>
    </Container>
  );
}
