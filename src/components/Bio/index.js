import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 60%;
  height: ${(props) => (props.scroll === 0 ? "auto" : "0px")};
  margin: ${(props) => (props.scroll === 0 ? "5.5rem 0 3rem 0" : "0px")};
  padding: ${(props) => (props.scroll === 0 ? "1rem 2rem" : "0px")};
  box-sizing: border-box;
  display: flex;
  overflow: auto;
  color: black;
  background-color: var(--color);
  border-radius: 20px;
  opacity: ${(props) => (props.scroll ? "0" : "1")};
  transition: opacity 0.3s ease;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    opacity: 1;
    margin: 3rem 0 0 0;
    padding: 1rem 2rem;
  }
`;

const Bio = (props) => {
  return (
    <Section scroll={props.scroll}>
      {props.bio.map((item) => (
        <p key={item.id}>{item.description}</p>
      ))}
    </Section>
  );
};
export default Bio;
