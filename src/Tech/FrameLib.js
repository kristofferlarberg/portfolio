import React from "react";

const FrameLib = ({ frameLib }) => {
  return (
    <div>
      <h3>Frameworks/Libraries</h3>
      <ul>
        {frameLib.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameLib;
