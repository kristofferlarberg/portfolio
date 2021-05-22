import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  margin: 3rem 0 0 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    margin: 2rem 0 0 0;
  }
`;

const LinkP = styled.p`
  margin-top: 0;
`;

const Description = ({description, url}) => (
  <Section>
    <p>{description}</p>
    <LinkP>
      {url ? (
        <a href={url} rel="noopener noreferrer" target="_blank">
          {url.includes('github') ? '→ GitHub' : `${url}`}
        </a>
      ) : null}
    </LinkP>
  </Section>
);

export default Description;
