import React from "react";
import styled from "styled-components";
import Links from "../Links";
import Tech from "../Tech";

const Container = styled.footer`
  margin: 0;
  padding: 0 6rem 6rem 6rem;
  width: 100%;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color);
  -webkit-box-shadow: -1px -7px 9px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -7px 9px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -7px 9px 0px rgba(0, 0, 0, 0.2);
  @media (max-width: 1000px) {
    padding: 0 2rem 6rem 2rem;
  }
`;

const Contact = styled.div`
  margin-top: 6rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Figure = styled.figure`
  margin-left: 0;
  width: 20%;
  min-width: 20%;
  height: auto;
`;

const About = (props) => (
  <Container>
    {props.contact.map((item) => (
      <Contact key={item.id}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${item.contact}`}
        >
          {item.contact}
        </a>
      </Contact>
    ))}
    <Links links={props.links} />
    <Tech
      languages={props.languages}
      frameLib={props.frameLib}
      tools={props.tools}
      software={props.software}
    />
  </Container>
);

export default About;
