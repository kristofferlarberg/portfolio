import React from 'react';
import Contact from '../Contact';
import Tech from '../Tech';

const About = ({ info, tech }) =>
  <main>
    <article>
      {info ? info.map((item, i) => 
          <>
            <figure className='portrait'>
              <img className='portrait' src={item.img} alt='Portrait photography by Anna Drvnik.'></img>
              <figcaption>
                <h4 className='caption'>
                  {item.credits[0]}<span style={{ paddingLeft: '1em' }}><a href={item.credits[1]} className='caption'>{item.credits[1]}</a></span>
                </h4>
              </figcaption>
            </figure>
            <section>
              <p>{item.description}</p>
            </section>
          </>
      ) : null}
      <Tech tech={tech} />
      <Contact info={info} />
    </article>
  </main>

export default About;
