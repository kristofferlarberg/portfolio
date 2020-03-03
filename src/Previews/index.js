import React from 'react';
import Post from '../Post';

const Previews = ({ projects, toggleShowDetails, showDetails, scrollToTop }) =>
  <main>
    {showDetails ? <Post projects={projects} showDetails={showDetails} /> : null}
    <div span style={{borderTop: '1px solid black'}}>
      <p span style={{ margin: '5rem 2rem 2rem 2rem', width: 'auto' }}>
        *This portfolio awaits its projects, meanwhile it offers some off-hour content.*
      </p>
      <div className='preview-all'>
          {projects.map( (item) => {
            return <div className={`preview${item.id}`} id={item.id} key={item.id} onClick={() => 
              { toggleShowDetails(item.id); scrollToTop() }
            }>
              <img src={item.img} className='preview-img' alt='Project'></img> 
              <h3 className='top'>{item.title}</h3>
            </div>
          })}
      </div>
    </div>     
  </main >

export default Previews;









