import React from "react";
import styled from "styled-components";
import Links from "../Links";
import Tech from "../Tech";

const Container = styled.div`
  margin: 0;
  padding: 0 6rem 6rem 6rem;
  width: 100%;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  -webkit-box-shadow: -1px -7px 9px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -7px 9px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -7px 9px 0px rgba(0, 0, 0, 0.2);
`;

const Contact = styled.div`
  margin-top: 6rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Header = styled.h2`
  margin: 6rem 0 2rem 0;
  width: 100%;
  text-align: center;
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
    <Header>Skills</Header>
    <Tech
      languages={props.languages}
      frameLib={props.frameLib}
      tools={props.tools}
      software={props.software}
    />
  </Container>
);

export default About;
