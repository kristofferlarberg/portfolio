import React from 'react';
import Weather from '../Weather';

const About = ({ info, weather, condition }) =>
  <main>
    <article>
      <p>{weather || '?'}</p>
      {/* <Weather weather={weather} condition={condition} weatherColours={this.weatherColours.bind(this)} /> */}
      {info ? info.map(function (item) {
        return <section><p>{item.description}</p><div><a href={`mailto:${item.email}`}>mail@kristofferlarberg.se</a></div><div><a href={item.github} target='_blank'>github.com/kristofferlarberg</a></div><div><a href={item.linkedin} target='_blank'>linkedin.com/in/kristofferlarberg</a></div>
        </section>
      }) : null}
    </article>
  </main >

export default About;