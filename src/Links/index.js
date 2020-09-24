import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 0rem 1rem 6rem 1rem;
    @media (max-width: 1000px) {
width: calc(100vw - 4rem);
    margin-bottom: 5rem;
  }
`;


const Links = ({ links }) => (
  <Section>
    {links.map((item) => (
      <ul key={item.id}>
        <li key={item.id}>
          <a target="_blank" rel="noopener noreferrer" href={item.link}>
            → {item.name}
          </a>
        </li>
      </ul>
    ))}
  </Section>
);

export default Links;
