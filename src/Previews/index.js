import React from 'react';
import Post from '../Post';

const Previews = ({ projects, toggleShowDetails, showDetails, scrollToTop }) =>
  <main>
    {showDetails ? <Post projects={projects} showDetails={showDetails} /> : null}
    <div style={{ borderTop: '1px solid black', width: '100vw' }}></div>
    <p className='disclaimer'>
      *This part awaits its content, meanwhile, here’s some recent off-hours reading.*
    </p>
    <div className='grid'>
      {projects.map((item, i) => {
        return <div id={i} key={i} onClick={() => { toggleShowDetails(item.id); scrollToTop() }
        }>
          <img src={item.img} className='preview-img' alt='Project'></img>
          <h4 className='top'>{item.title}</h4>
        </div>
      })}
    </div>
  </main >

export default Previews;









