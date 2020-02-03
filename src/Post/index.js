import React from 'react';

const Post = ({ projects, showDetails }) => {
  let item = projects.find(item => item.id === showDetails);

  if (!item) {
    return
  }
  return (

    <article>

      <section>
        <h1>{item.title}</h1>
        <figure><img src={item.img} alt='Documentation'></img></figure>
      </section>
      <section className='description'>
        <p>{item.description}</p>
      </section>
      <section>{item.url ? <a href={item.url}>{item.url}</a> : null}</section>
      <footer>
        <h3>Role: {item.role}</h3>
        <h3>{item.team ? `Team: ${item.team}` : null}</h3>
        <h3>Format: {item.format}</h3><h3>Method: {item.method}</h3>
        <h3>{item.github ? <a href={item.github}><img src='img/github.svg' height='50px' width='auto' text-align='left'></img></a> : null}</h3>
        {/* <h3>{item.github ? ['Github:', <a href={item.github}>{item.github}</a>] : null} </h3> */}
      </footer>


    </article >

  )

}
export default Post;






