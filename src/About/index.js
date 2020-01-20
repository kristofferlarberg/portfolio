import React, { Component } from 'react';

const About = ({ info }) =>
  <main>
    <article>
      {info ? info.map(function (item) {
        return <section><p>{item.description}</p><p>{item.email}</p><p>{item.github}</p>
        </section>
      }) : null}
    </article>
  </main>

export default About;