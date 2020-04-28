import React from "react";

const Languages = ({ languages }) => {
  return (
    <div>
      <h3>Languages</h3>
      <ul>
        {languages.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
