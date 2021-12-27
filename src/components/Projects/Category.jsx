import React from 'react';
import styled from 'styled-components';

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
    margin: 0 0 0.5rem 0;
  }
`;

const Text = styled.p`
    font-family: "Space Mono", monospace;
    color: black;
    font-size: 1.6rem;
    line-height: 0;
    font-weight: 400;
    padding: 0;
    margin: 0;
    @media (max-width: 1000px) {
      font-size: 1.2rem;
    }
`;

const Category = ({category}) => (
  <Section>
    {category[0] ? (
      <Tag>
        <Text>{category[0]}</Text>
      </Tag>
    ) : null}
    {category[1] ? (
      <Tag>
        <Text>{category[1]}</Text>
      </Tag>
    ) : null}
  </Section>
);

export default Category;
