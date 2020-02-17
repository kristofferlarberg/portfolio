import React from 'react';

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
        <figure><img src={item.img} alt='Documentation'></img></figure>
      <section className='description'>
        <p>{item.description}</p>
        <p>{item.url ? <a href={item.url}>{item.url}</a> : null}</p>
      </section>
      <footer>
        <h3>Role: {item.role}</h3>
        <h3>{item.team ? `Team: ${item.team}` : null}</h3>
        <h3>Format: {item.format}</h3><h3>Method: {item.method}</h3>
        <h3>{item.github ? <a href={item.github} className='github'><img src='img/github.svg' alt='Project documentation' className='github' ></img></a> : null}</h3>
      </footer>
    </article >
  )
}

export default Post;






