import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 60%;
  height: auto;
  margin: 5.5rem 0 3rem 0;
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  overflow: auto;
  color: black;
  background-color: var(--color);
  border-radius: 20px;
  transition: opacity 0.3s ease;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    opacity: 1;
    margin: 3rem 0 0 0;
    padding: 1rem 2rem;
  }
`;

const Bio = ({bio}) => (
  <Section>
    {bio.map(item => (
      <p key={item.id}>{item.description}</p>
    ))}
  </Section>
);

export default Bio;
