import React from "react";
import styled, { keyframes } from "styled-components";
import Bio from "../Bio";

const animatedText = keyframes`
  from{width: 0;}
  to{width: 472px;}
`;

const Nav = styled.nav`
  padding: var(--side-padding);
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.scroll ? "white" : "")};
  transition: background-color 0.3s;
  @media (max-width: 1000px) {
    width: calc(100vw - 4rem);
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  /* animation: ${animatedText} 2s steps(30, end) 1s 1 normal both; */
`;



const Header = (props) => (
  <Nav scroll={props.scroll}>
    <Title scroll={props.scroll}>Kristoffer Larberg</Title>
      <Bio bio={props.bio} scroll={props.scroll} />
  </Nav>
);

export default Header;
