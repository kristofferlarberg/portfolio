import React, { Component } from 'react';

const Post = ( props ) =>
  <main>
    <article>
      {props.projects.map(function (item) {
        return <section> <h1>{item.title}</h1><img src={item.img} alt='Documentation'></img><p>{item.description}</p>
          <footer><h3>Team: {item.team}</h3><h3>Format: {item.format}</h3><h3>Method: {item.method}</h3></footer>
          </section>   
      })}   
    </article>
  </main>   




export default Post;