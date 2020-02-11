import React from 'react';

const About = ({ info }) =>
  <main>
    <article>
      {info ? info.map(function (item) {
        return <section>
          <figure>
            <img class="portrait" src={item.img} alt='Portrait'></img>
          </figure>
          <p>{item.description}</p>
          <ul>
            <li>
              <a href={`mailto:${item.email}`}>mail@kristofferlarberg.se</a>
            </li>
            <li>
              <a href={item.github} target='_blank' rel='noopener noreferrer'>github.com/kristofferlarberg</a>
            </li>
            <li>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>are.na/kristoffer-larberg</a>
            </li>
            <li>
              <a href={item.linkedin} target='_blank' rel='noopener noreferrer'>linkedin.com/in/kristofferlarberg</a>
            </li>
          </ul>
        </section>
      }) : null}
    </article>
  </main>

export default About;