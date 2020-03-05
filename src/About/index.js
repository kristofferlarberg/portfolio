import React from 'react';

const About = ({ info }) =>
  <main>
    {info ? info.map((item, i) => {
      return <article key={i}>
        <figure className="portrait">
          <img className='portrait' src={item.img} alt='Portrait photography by Anna Drvnik.'></img>
          <figcaption>
            <h3 className='caption'>
              {item.credits[0]}<span style={{ paddingLeft: '1em' }}><a href={item.credits[1]} className='caption'>{item.credits[1]}</a></span>
            </h3>
          </figcaption>
        </figure>
        <section>
          <p>{item.description}</p>
        </section>
        <section className='links'>
          <ul>
            <li>
              <a target='_blank' rel="noopener noreferrer" href={`mailto:${item.email}`}>mail@kristofferlarberg.se</a>
            </li>
            <li>
              <a target='_blank' rel="noopener noreferrer" href={item.github}>github.com/kristofferlarberg</a></li>
            <li>
              <a target='_blank' rel="noopener noreferrer" href={item.linkedin}>linkedin.com/in/kristofferlarberg</a>
            </li>
            <li>
              <a target='_blank' rel="noopener noreferrer" href={item.link}>are.na/kristoffer-larberg</a>
            </li>
          </ul>
        </section>
      </article>
    }) : null}
  </main>

export default About;
