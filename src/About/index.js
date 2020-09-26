import React from "react";
import styled from "styled-components";
import Links from "../Links";
import Tech from "../Tech";

const Container = styled.div`
  border-top: 1px solid black;
  padding-bottom: 12rem;
  padding: var(--side-padding);
  width: 100vw;
  display: flex;
  position: relative;
  z-index: 1;box-sizing: border-box;
  
  align-items: start;
  border-top: solid black 1px;
  -webkit-box-shadow: -1px -7px 9px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -7px 9px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -7px 9px 0px rgba(0, 0, 0, 0.2);
`;

const Portrait = styled.div`
  width: 50vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const About = (props) => (
  <Container>
    {props.contact.map((item) => (
      <Portrait key={item.id}>
        <figure className="portrait">
          <img className="portrait" src={item.img} alt="Portrait"></img>
        </figure>
        <section className="links">
          <ul>
            <li key={item.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${item.contact}`}
              >
                {item.contact}
              </a>
            </li>
          </ul>
        </section>
        <Links links={props.links} />
        {props.bio.map((item) => (
        <p>{item.description}</p> ))}
      </Portrait>
    ))}

    <Tech
      languages={props.languages}
      frameLib={props.frameLib}
      tools={props.tools}
      software={props.software}
    />
  </Container>
);

export default About;
