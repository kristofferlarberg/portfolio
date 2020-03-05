import React from 'react';
import Footer from '../Footer';

const Post = ({ projects, showDetails }) => {
  let item = projects.find(item => item.id === showDetails);
  if (!item) {
    return
  }
  return (
    <article>
      <section className='title'>
        <h1>{item.title}</h1>
      </section>
      <figure>
        <img src={item.img} alt='Documentation'></img>
        <figcaption>
          <h3 className="caption">
            {item.credits[0]}<span style={{ paddingLeft: '1em' }}><a href={item.credits[1]} className='caption'>{item.credits[1]}</a></span>
          </h3>
        </figcaption>
      </figure>
      <section>
        <p>{item.description}</p>
        <p>{item.url ? <a target='_blank' rel="noopener noreferrer" href={item.url}>{item.url}</a> : null}</p>
      </section>
      {item.role ? <Footer projects={projects} showDetails={showDetails} /> : null}
    </article >
  )
}

export default Post;






