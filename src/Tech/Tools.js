import React from "react";

const Tools = (props) => {
  return (
    <>
      <ul>
        {props.tools.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Tools;
