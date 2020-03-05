import React from 'react';
import Post from '../Post';

const Previews = ({ projects, toggleShowDetails, showDetails, scrollToTop }) =>
  <main>
    {showDetails ? <Post projects={projects} showDetails={showDetails} /> : null}
    <div span style={{ borderTop: '1px solid black', width: '100vw' }}></div> 
      <p className='disclaimer'>
        *This portfolio awaits its projects, here's some reading while you wait.*
      </p>
      <div className='grid'>
          {projects.map( (item) => {
            return <div id={item.id} key={item.id} onClick={() => 
              { toggleShowDetails(item.id); scrollToTop() }
            }>
              <img src={item.img} className='preview-img' alt='Project'></img> 
              <h3 className='top'>{item.title}</h3>
            </div>
          })}
      </div>
  </main >

export default Previews;









