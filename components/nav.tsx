import styled from "@emotion/styled";
import Link from "next/link";

const NavContainer = styled("nav")`
  ul {
    li {
      display: inline-block;
      background: yellow;
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
      <ul>
        {menu.map(({ to, title }) => (
          <li>
            <Link href={to}>{title}</Link>
          </li>
        ))}
      </ul>
    </NavContainer>
  );
}
