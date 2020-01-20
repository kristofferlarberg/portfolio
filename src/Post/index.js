import React, { Component } from 'react';


const Post = ({ projects }) =>


  <main>
    <article>
      {projects.map(function (item) {
        return <section> <h1>{item.title}</h1><figure><img src={item.img} alt='Documentation'></img></figure><p>{item.description}</p>
          <footer><h3>Team: {item.team}</h3><h3>Format: {item.format}</h3><h3>Method: {item.method}</h3></footer>
        </section>
      })}
    </article>
  </main>

export default Post;


