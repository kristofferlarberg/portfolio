import React from "react";
import styled from "styled-components";
import Bio from "../Bio";
import Links from "../Links";

const Nav = styled.nav`
  max-width: 100%;
  height: auto;
  margin: 0;
  padding: 5rem 6rem 6rem 6rem;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    padding: 4rem 2rem 6rem 2rem;
  }
`;

const Title = styled.h1`
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Header = (props) => (
  <Nav>
    <Title>Kristoffer Larberg</Title>
    <Bio bio={props.bio} scroll={props.scroll} />
    <Links links={props.links} />
  </Nav>
);

export default Header;
