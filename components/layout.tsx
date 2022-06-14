import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled"
import Nav from "./nav";
const name = "Philip Fehervari";
export const siteTitle = "Philip Fehervari Resume site";

const Container = styled('div')`

`
export default function Layout({ children, home }) {
  return (
      <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav menu={[{title:'Skills',to: '/skills'}, {title:'about',to:'/about'}]}></Nav>
      <header >
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt={name}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 >
              <Link href="/">
                <a >{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div >
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
  );
}
