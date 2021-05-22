import React from 'react';
import Post from '../Post';

const Previews = ({projects}) => (
  <>
    {projects.map(project => (
      <Post
        key={project.id}
        project={project}
      />
    ))}
  </>
);
export default Previews;
