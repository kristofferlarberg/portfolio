import React from "react";

const Languages = (props) => {
  return (
    <>
      <ul>
        {props.languages.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Languages;
