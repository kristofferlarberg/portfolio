import React from 'react';

const Tech = ({ tech }) =>
  <section className='infogrid'>
    <div>
      <h3>Languages</h3>
      {tech ? tech.map((item, i) => {
        return <div>
          <ul>
            <li div id={i} key={item.id}>{item.language01}</li>
            <li div id={i} key={item.id}>{item.language02}</li>
            <li div id={i} key={item.id}>{item.language03}</li>
            <li div id={i} key={item.id}>{item.language04}</li>
            <li div id={i} key={item.id}>{item.language05}</li>
          </ul>
        </div>
      }) : null}
    </div>
    <div>
      <h3>Frameworks/Libraries</h3>
      {tech ? tech.map((item, i) => {
        return <div>
          <ul>
            <li div id={i} key={item.id}>{item.framework01}</li>
            <li div id={i} key={item.id}>{item.framework02}</li>
          </ul>
        </div>
      }) : null}
    </div>
    <div>
      <h3>Tools</h3>
      {tech ? tech.map((item, i) => {
        return <div>
          <ul>
            <li div id={i} key={item.id}>{item.tool01}</li>
            <li div id={i} key={item.id}>{item.tool02}</li>
          </ul>
        </div>
      }) : null}
    </div>
    <div>
      <h3>Software</h3>
      {tech ? tech.map((item, i) => {
        return <div>
          <ul>
            <li id={i} key={item.id}>{item.software01}</li>
            <li id={i} key={item.id}>{item.software02}</li>
            <li id={i} key={item.id}>{item.software03}</li>
            <li id={i} key={item.id}>{item.software04}</li>
          </ul>
        </div>
      }) : null}
    </div>
  </section>


export default Tech;








