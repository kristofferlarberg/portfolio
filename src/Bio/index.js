import React from "react";
import styled from "styled-components";

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  overflow: auto;
  width: auto;
  color: white;
  background-color: var(--color);
  border-radius: 20px;
  height: ${(props) => (props.scroll ? "0px" : "auto")};
  opacity: ${(props) => (props.scroll ? "0" : "1")};
  margin: ${(props) => (props.scroll ? "0px" : "5rem 0 3rem 0")};
  padding: ${(props) => (props.scroll ? "0px" : "1rem 2rem")};
  transition: opacity 0.3s ease;

`;

const Bio = (props) => {
  return (
    <Section scroll={props.scroll}>
      {props.bio.map((item) => (
        <p>{item.description}</p>
      ))}
    </Section>
  );
};
export default Bio;
