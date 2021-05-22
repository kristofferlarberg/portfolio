import React from 'react';

const FrameLib = ({frameLib}) => (
  <>
    <ul>
      {frameLib.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </>
);

export default FrameLib;
