import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const SiteHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const NavLink = styled(Link)`
  color: black;
  margin-left: 2rem;
  text-decoration: none;
  display: inline-block;
  @media (max-width: 450px) {
    margin-left: 0;
    padding: 0 1rem;
  }
`;
const HomeLink = styled(NavLink)`
  margin-left: 0;
  font-weight: 600;
  font-size: 1.2rem;
  @media (max-width: 450px) {
    margin-bottom: 1rem;
  }
`;

const Header = () => (
  <SiteHeader>
    <HomeLink to="/">koeneraad.</HomeLink>
    <nav>
      <NavLink to="/about/">About</NavLink>
      <NavLink to="/blog/">Blog</NavLink>
      <NavLink to="/contact/">Contact</NavLink>
    </nav>
  </SiteHeader>
);

export default Header;
