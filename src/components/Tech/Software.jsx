import React from 'react';

const Software = ({software}) => (
  <>
    <ul>
      {software.map(soft => (
        <li key={soft.id}>{soft.title}</li>
      ))}
    </ul>
  </>
);

export default Software;
