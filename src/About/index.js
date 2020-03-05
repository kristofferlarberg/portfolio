import React from 'react';

const About = ({ info }) =>
  <main>
    
      {info ? info.map(function (item) {
        return <article>
          <figure className="portrait">
            <img className='portrait' src={item.img} alt='Portrait photography by Anna Drvnik.'></img>
            <figcaption>
              {item.credits[0]}<span style={{ paddingLeft: '1em' }}><a href={item.credits[1]} className='caption'>{item.credits[1]}</a></span>
            </figcaption>
          </figure>
          <section>
            <p>{item.description}</p>
          </section>
          <section className='links'>
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
        </article>
      }) : null}
    
  </main>

export default About;