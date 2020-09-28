import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: auto;
  height: ${(props) => (props.scroll ? "0px" : "auto")};
  margin: ${(props) => (props.scroll ? "0px" : "5rem 0 3rem 0")};
  padding: ${(props) => (props.scroll ? "0px" : "1rem 2rem")};
  box-sizing: border-box;
  display: flex;
  overflow: auto;
  color: white;
  background-color: black;
  border-radius: 20px;
  opacity: ${(props) => (props.scroll ? "0" : "1")};
  transition: opacity 0.3s ease;
  @media (max-width: 1000px) {
    height: auto;
    opacity: 1;
    margin: 5rem 0 3rem 0;
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
