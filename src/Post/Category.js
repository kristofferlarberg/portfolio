import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  @media (max-width: 1000px) {
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Tag = styled.div`
  width: auto;
  padding: 2rem 2rem 2.1rem 2rem;
  margin: 0 1rem 0 0;
  border-radius: 35px;
  background-color: var(--color);
  @media (max-width: 1000px) {
    margin: 0 0 1rem 0;
  }
`;

const Text = styled.h4`
  line-height: 0;
  color: black;
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
