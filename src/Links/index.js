import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1000px) {
    margin-bottom: 5rem;
  }
`;

const Links = (props) => (
  <Section>
    {props.links.map((item) => (
      <div key={item.id}>
        <a target="_blank" rel="noopener noreferrer" href={item.link}>
          → {item.name}
        </a>
      </div>
    ))}
  </Section>
);

export default Links;
