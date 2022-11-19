import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  margin: 4rem 0 6rem 0;
  padding: 1rem 0 0 0;
  align-self: flex-start;
  border-top: 1px solid black;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 4rem 0 5rem 0;
  }
`;

const FooterText = styled.p`
  font-family: "Space Mono", monospace;
    color: black;
    font-size: 1.6rem;
    line-height: 4.5rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
    @media (max-width: 1000px) {
      font-size: 1.2rem;
      line-height: 3.5rem;
    }
`;

const Link = styled.a`
  &:hover {
    box-shadow: none;
  }
  @media (max-width: 1000px) {
    box-shadow: none;
  }
`;

const GitHub = styled.svg`
  width: 50px;
  height: 50px;
  margin-top: 1rem;
  margin-left: 0.3rem;
  fill: black;
  ${Link}:hover & {
    fill: var(--color);
  }
`;

const Footer = ({
  format,
  frameLibs,
  github,
  languages,
  role,
  team,
  tools,
}) => (
  <FooterContainer>
    <FooterText>{role ? `Role: ${role}` : null}</FooterText>
    <FooterText>{team ? `Team: ${team}` : null}</FooterText>
    <FooterText>{format ? `Format: ${format}` : null}</FooterText>
    <FooterText>{frameLibs ? `Frameworks/Libraries: ${frameLibs}` : null}</FooterText>
    <FooterText>{languages ? `Languages: ${languages}` : null}</FooterText>
    <FooterText>{tools ? `Tools: ${tools}` : null}</FooterText>
    {github ? (
      <Link aria-label="Link to GitHub repo" href={github} rel="noopener noreferrer">
        <GitHub aria-hidden="true">
          <path
            className="st0"
            d="M16.29,0C7.29,0,0,7.29,0,16.29c0,7.2,4.67,13.3,11.14,15.46c0.81,0.15,1.11-0.35,1.11-0.79
              c0-0.39-0.01-1.41-0.02-2.77c-4.53,0.98-5.49-2.18-5.49-2.18C6,24.13,4.93,23.62,4.93,23.62c-1.48-1.01,0.11-0.99,0.11-0.99
              c1.63,0.12,2.5,1.68,2.5,1.68c1.45,2.49,3.81,1.77,4.74,1.35c0.15-1.05,0.57-1.77,1.03-2.18C9.7,23.08,5.9,21.68,5.9,15.44
              c0-1.78,0.63-3.23,1.68-4.37C7.41,10.65,6.85,9,7.73,6.76c0,0,1.37-0.44,4.48,1.67c1.3-0.36,2.69-0.54,4.08-0.55
              c1.38,0.01,2.78,0.19,4.08,0.55c3.11-2.11,4.48-1.67,4.48-1.67c0.89,2.24,0.33,3.9,0.16,4.31c1.04,1.14,1.67,2.59,1.67,4.37
              c0,6.26-3.81,7.63-7.44,8.04c0.58,0.5,1.11,1.5,1.11,3.02c0,2.18-0.02,3.93-0.02,4.47c0,0.44,0.29,0.94,1.12,0.78
              c6.47-2.16,11.13-8.26,11.13-15.45C32.58,7.29,25.29,0,16.29,0z"
          />
        </GitHub>
      </Link>
    ) : null}
  </FooterContainer>
);

export default Footer;
