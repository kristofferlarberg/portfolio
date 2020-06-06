import React from "react";
import styled from "styled-components";
import Links from "../Links";
import Tech from "../Tech";

const Container = styled.div`
  border-top: 1px solid black;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
  border-top: solid black 1px;
`; 

const Contact = ({ contact, languages, links, frameLib, tools, software }) => (
  <Container>
    {contact.map((item) => (
      <>
        <figure className="portrait" key={item.id}>
          <img
            className="portrait"
            src={item.img}
            alt="Portrait photography by Anna Drvnik."
          ></img>
          <figcaption>
            <h5 className="caption">{item.credits}</h5>
          </figcaption>
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
        <Links links={links} />
        <Tech
          languages={languages}
          frameLib={frameLib}
          tools={tools}
          software={software}
        />
      </>
    ))}
  </Container>
);

export default Contact;
