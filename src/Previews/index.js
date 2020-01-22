import React, { Component } from 'react';
import Post from '../Post';


const Previews = ({ projects, toggleShowDetails, showDetails }) =>
  <main>
    {showDetails ? <Post projects={projects} showDetails={showDetails} /> : null}




    <div className='preview-all'>


      {projects.map(function (item) {
        return <div className={`preview${item.id}`} id={item.id} key={item.id} onClick={() => toggleShowDetails(item.id)}><img src={item.img} className='preview-img' alt='Project'></img></div>

      })}



    </div>



  </main >




export default Previews;






