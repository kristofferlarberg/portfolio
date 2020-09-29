import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const Div = styled.div`
  margin: 0 0 1rem 0;
  @media (max-width: 1000px) {

  }
`;

const Links = (props) => (
  <Section>
    {props.links.map((item) => (
      <Div key={item.id}>
        <a target="_blank" rel="noopener noreferrer" href={item.link}>
          → {item.name}
        </a>
      </Div>
    ))}
  </Section>
);

export default Links;
