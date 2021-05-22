import React from 'react';

const Tools = ({tools}) => (
  <>
    <ul>
      {tools.map(tool => (
        <li key={tool.id}>{tool.title}</li>
      ))}
    </ul>
  </>
);

export default Tools;
