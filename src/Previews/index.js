import React, { Component } from 'react';

const Previews = ({ projects }) =>
  <main>
    {projects.map(function (item) {
      return <div className='preview'><img src={item.img} alt='Project'></img></div>
    })}
  </main>

export default Previews;