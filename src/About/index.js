import React, { Component } from "react";
import Contact from "../Contact";
import Tech from "../Tech";
import Bio from "./Bio";

const About = ({ bio, contact, languages, frameLib, tools, software }) => {
  return (
    <main>
      <article>
        <Bio bio={bio} />
        <Contact contact={contact} />
        <Tech
          languages={languages}
          frameLib={frameLib}
          tools={tools}
          software={software}
        />
      </article>
    </main>
  );
};

export default About;
