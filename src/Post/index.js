import React from 'react';

const Post = ({ projects, showDetails }) => {
  let item = projects.find(item => item.id === showDetails);

  if (!item) {
    return
  }
  return (

    <article>

      <section> <h1>{item.title}</h1><figure><img src={item.img} alt='Documentation'></img></figure><p>{item.description}</p>

      </section>
      <footer><h3>{item.team ? `Team: ${item.team}` : null}</h3><h3>Format: {item.format}</h3><h3>Method: {item.method}</h3><h3>{item.github ? `Github: ${item.github}` : null}</h3></footer>


    </article>

  )

}
export default Post;






