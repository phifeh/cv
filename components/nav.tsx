import styled from "@emotion/styled";
import Link from "next/link";
import { SITE_NAME } from "../data/config";

const NavContainer = styled("nav")`
  background: var(--colors-primary-text);
  width: 100%;
  display: flex;
  a {
    color: white;
    transition: 2s ease opacity;
    &:hover {
      opacity: 0.7;
    }
  }
  h4 {
    padding: 0.4em;
    margin: 0;
  }
  ul {
    margin: 0;
    li {
      display: inline-block;
      padding: 0.4em;
    }
  }
  border-bottom: 2px solid white;
`;

export default function Nav({
  menu,
}: {
  menu: Array<{ title: string; to: string }>;
}) {
  return (
    <NavContainer>
      <h4>
        <Link href="/">
          <a>{SITE_NAME}</a>
        </Link>
      </h4>
      <nav>
        <ul>
          {menu.map(({ to, title }) => (
            <li key={to}>
              <Link href={to}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </NavContainer>
  );
}
