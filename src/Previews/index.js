import React, { Component } from 'react';

const Previews = ({ projects }) =>
  <main>
    <div className='preview-all'>
      {projects.map(function (item) {
        return <div onClick={(item) => this.goToPost(item.objectID)}><div className={`preview${item.objectID}`} id={item.objectID}><img src={item.img} className='preview-img' alt='Project'></img></div></div>
      })}
    </div>
  </main >


export default Previews;






