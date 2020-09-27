import React from "react";
import styled, { keyframes } from "styled-components";
import Bio from "../Bio";
import Links from "../Links";

const animatedText = keyframes`
  from{width: 0;}
  to{width: 472px;}
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 5rem 6rem 6rem 6rem;
  overflow: auto;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  border-bottom: 1px solid black;
  /* background-color: ${(props) => (props.scroll ? "white" : "")}; */
  /* transition: background-color 0.3s; */
  background-color: white;
  @media (max-width: 1000px) {
    width: calc(100vw - 4rem);
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.h1`
margin: 0 0 2rem 0;
`;

const Header = (props) => (
  <Nav /* scroll={props.scroll} */>
    <Title /* scroll={props.scroll} */>Kristoffer Larberg</Title>
    <Bio bio={props.bio} scroll={props.scroll} />
    <Links links={props.links} />
  </Nav>
);

export default Header;
