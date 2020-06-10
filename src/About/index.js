import React from "react";
import styled from "styled-components";
import Links from "../Links";
import Tech from "../Tech";

const Container = styled.div`
  background-color: var(--color);
  border-top: 1px solid black;
  padding-bottom: 12rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid black 1px;
`;

const Portrait = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About = ({ contact, languages, links, frameLib, tools, software }) => (
  <Container>
    {contact.map((item) => (
      <Portrait key={item.id}>
        <figure className="portrait">
          <img
            className="portrait"
            src={item.img}
            alt="Portrait"
          ></img>
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
      </Portrait>
    ))}
    <Links links={links} />
    <Tech
      languages={languages}
      frameLib={frameLib}
      tools={tools}
      software={software}
    />
  </Container>
);

export default About;
