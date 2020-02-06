import React from 'react';
import Weather from '../Weather';

const About = ({ info, weather, }) =>
  <main>
    <article>
      {info ? info.map(function (item) {
        return <section>
          <figure>
            <img class="portrait" src={item.img} alt='Documentation'></img>
          </figure>
          <p>{item.description}</p>
          <ul>
            <li>
              <a href={`mailto:${item.email}`}>mail@kristofferlarberg.se</a>
            </li>
            <li>
              <a href={item.github} target='_blank'>github.com/kristofferlarberg</a>
            </li>
            <li>
              <a href={item.link} target='_blank'>are.na/kristoffer-larberg</a>
            </li>
            <li>
              <a href={item.linkedin} target='_blank'>linkedin.com/in/kristofferlarberg</a>
            </li>
          </ul>
        </section>
      }) : null}
    </article>
  </main>

export default About;