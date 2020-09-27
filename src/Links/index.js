import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 3rem 0 0 0;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  align-items: flex-start;
  @media (max-width: 1000px) {
    width: calc(100vw - 4rem);
    margin-bottom: 5rem;
  }
`;

const Links = ({ links }) => (
  <Section>
    {links.map((item) => (
      <div key={item.id}>
        <a target="_blank" rel="noopener noreferrer" href={item.link}>
          → {item.name}
        </a>
      </div>
    ))}
  </Section>
);

export default Links;
