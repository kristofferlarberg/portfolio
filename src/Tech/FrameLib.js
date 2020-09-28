import React from "react";

const FrameLib = (props) => {
  return (
    <>
      <ul>
        {props.frameLib.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default FrameLib;
