import React from 'react';

const About = ({ info, weather }) =>
  <main>
    <article>
      <p>{weather}</p>
      {info ? info.map(function (item) {
        return <section><p>{item.description}</p><p>{item.email}</p><p>{item.github}</p>
        </section>
      }) : null}
    </article>
  </main>

export default About;