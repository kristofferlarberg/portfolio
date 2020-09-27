import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  @media (max-width: 1000px) {
    width: calc(100vw - 4rem);
    display: flex;
    align-items: flex-start;
  }
`;

const Tag = styled.section`
  padding: 2rem 2rem 2.1rem 2rem;
  margin: 0 1rem 0 0;
  border-radius: 35px;
  /* border: solid 1px black; */
  width: auto;
  background-color: var(--color);
  color: black;
`;

const Text = styled.h4`
  line-height: 0;
`;


const Category = (props) => {
  return (
    <Section>
      {props.category[0] ? (
        <Tag>
          <Text>{props.category[0]}</Text>
        </Tag>
      ) : null}
      {props.category[1] ? (
        <Tag>
          <Text>{props.category[1]}</Text>
        </Tag>
      ) : null}
    </Section>
  );
};

export default Category;
