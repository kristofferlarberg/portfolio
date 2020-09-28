import React from "react";
import styled, { keyframes } from "styled-components";
import Bio from "../Bio";
import Links from "../Links";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 5rem 6rem 6rem 6rem;
  overflow: auto;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  background-color: white;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = (props) => (
  <Nav>
    <Title>Kristoffer Larberg</Title>
    <Bio bio={props.bio} scroll={props.scroll} />
    <Links links={props.links} />
  </Nav>
);

export default Header;
