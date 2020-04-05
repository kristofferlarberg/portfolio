import React from 'react';

const Contact = ({ info }) =>
  <>
    {info.map((item, i) => {
      return (
        <>
          <section className='links'>
            <div>
              <ul>
                <li id={i} key={item.id}>
                  <a target='_blank' rel="noopener noreferrer" href={`mailto:${item.email}`}>mail@kristofferlarberg.se</a>
                </li>
              </ul>
            </div>
          </section>
          <section className='links'>
            <div>
              <ul>
                <li id={i} key={item.id}>
                  <a target='_blank' rel="noopener noreferrer" href={item.github}>Github</a></li>
                <li id={i} key={item.id}>
                  <a target='_blank' rel="noopener noreferrer" href={item.linkedin}>LinkedIn</a>
                </li>
              </ul>
            </div>
          </section>
        </>
      );
    })}
  </>



export default Contact;
