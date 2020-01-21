import React, { Component } from 'react';
import Previews from '../Previews';

let selectedPostId = localStorage.getItem("selectedPost");
// you can get this cardId anywhere in the component as per your requirement

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


