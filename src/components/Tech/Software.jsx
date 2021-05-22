import React from "react";

const Software = (props) => {
  return (
    <>
      <ul>
        {props.software.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Software;
