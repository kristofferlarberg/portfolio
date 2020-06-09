import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
`;

const Header = () => (
  <Nav>
    <h2>Kristoffer Larberg</h2>
  </Nav>
);

export default Header;
