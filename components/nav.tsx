import styled from "@emotion/styled";
import Link from "next/link";
import { SITE_NAME } from "../data/config";

const NavContainer = styled("nav")`
  background: var(--colors-primary-text);
  width: 100%;
  display: flex;
  a {
    color: white;
    padding: 0.25rem;
    
  }
  h4 {
    padding: 0.25rem;
    margin: 0;
  }
  ul {
    margin: 0;
    li {
      display: inline-block;
      padding: 0.25rem;
    margin-left: 0.75rem;
    font-weight: 100;
    a{
  opacity: 0.7;
    transition: 0.5s ease opacity;
    &:hover {
    opacity:1;
    }
    }
    }
  }
`;

export default function Nav({
  menu,
}: {
  menu: Array<{ title: string; to: string }>;
}) {
  return (
    <NavContainer>
        <Link href="/">
          <a style={{fontWeight: 100}}>{SITE_NAME}</a>
        </Link>
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
