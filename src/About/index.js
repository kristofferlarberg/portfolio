import React from 'react';

const About = ({ info, tech }) =>
  <main>
    <article>
      {info ? info.map((item, i) => {
        return <>
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
      }) : null}
      <section className='infogrid'>
        <div><h3>Languages</h3>
          {tech ? tech.map((item, i) => {
            return <div>
              <ul>
                <li key={i}>{item.language01}</li>
                <li key={i}>{item.language02}</li>
                <li key={i}>{item.language03}</li>
                <li key={i}>{item.language04}</li>
                <li key={i}>{item.language05}</li>
              </ul>
            </div>
          }) : null}
        </div>
        <div>
          <h3>Frameworks/Libraries</h3>
          {tech ? tech.map((item, i) => {
            return <div>
              <ul>
                <li key={i}>{item.framework01}</li>
                <li key={i}>{item.framework02}</li>
              </ul>
            </div>
          }) : null}
        </div>
        <div>
          <h3>Tools</h3>
          {tech ? tech.map((item, i) => {
            return <div>
              <ul>
                <li key={i}>{item.tool01}</li>
                <li key={i}>{item.tool02}</li>
              </ul>
            </div>
          }) : null}
        </div>
        <div>
          <h3>Software</h3>
          {tech ? tech.map((item, i) => {
            return <div>
              <ul>
                <li key={i}>{item.software01}</li>
                <li key={i}>{item.software02}</li>
                <li key={i}>{item.software03}</li>
                <li key={i}>{item.software04}</li>
              </ul>
            </div>
          }) : null}
        </div>
      </section>
      {info ? info.map((item, i) => {
        return <>
          <section className='links'>
            <div>
              <ul>
                <li key={i}>
                  <a target='_blank' rel="noopener noreferrer" href={`mailto:${item.email}`}>mail@kristofferlarberg.se</a>
                </li>
              </ul>
            </div>
          </section>
          <section className='links'>
            <div>
              <ul>
                <li key={i}>
                  <a target='_blank' rel="noopener noreferrer" href={item.github}>github.com/kristofferlarberg</a></li>
                <li key={i}>
                  <a target='_blank' rel="noopener noreferrer" href={item.linkedin}>linkedin.com/in/kristofferlarberg</a>
                </li>
              </ul>
            </div>
          </section>
        </>
      }) : null}
    </article>
  </main>

export default About;
