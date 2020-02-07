import React from 'react';
import Post from '../Post';

const Previews = ({ projects, toggleShowDetails, showDetails, scrollToTop }) =>
  <main>
    {showDetails ? <Post projects={projects} showDetails={showDetails} /> : null}
    <div className='preview-all'>
      {projects.map(function (item) {
        return <div className={`preview${item.id}`} id={item.id} key={item.id} onClick={() => 
          { toggleShowDetails(item.id); scrollToTop() }
        }>
          <img src={item.img} className='preview-img' alt='Project'></img> 
          <h3>{item.title}</h3>
        </div>
      })}
    </div>
  </main >

export default Previews;









