import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3rem 0 0 0;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 3rem 2rem 0 2rem;
  }
`;

const Description = (props) => {
  return (
    <Section>
      <p>{props.description}</p>
      <p>
        {props.url ? (
          <a target="_blank" rel="noopener noreferrer" href={props.url}>
            {props.url.includes("github") ? "→ GitHub" : `${props.url}`}
          </a>
        ) : null}
      </p>
    </Section>
  );
};

export default Description;
