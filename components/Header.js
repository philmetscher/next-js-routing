import Link from "next/link";
import styled from "styled-components";

import StyledNavLink from "./StyledNavLink";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/" passHref>
          <StyledNavLink>Home</StyledNavLink>
        </Link>
        <Link href="/product" passHref>
          <StyledNavLink>Product</StyledNavLink>
        </Link>
        <Link href="/team" passHref>
          <StyledNavLink>Team</StyledNavLink>
        </Link>
        <Link href="/account" passHref>
          <StyledNavLink>Account</StyledNavLink>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
