import React from "react";
import styled from "styled-components";
import Weather from "../Weather";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
`;

const Header = ({ toggleShowDetails, weather }) => (
  <Nav>
    <Weather weather={weather}>Kristoffer Larberg</Weather>
  </Nav>
);

export default Header;
