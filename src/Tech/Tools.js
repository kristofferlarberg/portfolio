import React from "react";

const Tools = ({ tools }) => {
  return (
    <div>
      <h3>Tools</h3>
      <ul>
        {tools.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
