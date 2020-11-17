import React from "react";
import styled from "@emotion/styled";
import Header from "../components/header";

const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 2rem;
`;

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Layout;
