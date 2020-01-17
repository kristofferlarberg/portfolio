import React, { Component } from 'react';

const Previews = ( props ) =>
  <main>
    <div className='preview-all'>
      {props.projects.map(function (item) {
        return <figure><img src={item.img} className='preview-project' alt='Project'></img></figure>;
      })}
    </div>
  </main>





export default Previews;