import React, { Component } from 'react';

const About = (props) =>
  <main style={{ backgroundColor: 'yellow' }}>
    <article>
      {props.info.map(function (item) {
        return <section><p>{item.description}</p><p>{item.email}</p><p>{item.github}</p>
        </section>
      })}
    </article>
  </main>
 

export default About;