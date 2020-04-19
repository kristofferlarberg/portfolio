import React from "react";

const Software = ({ software }) => {
  return (
    <div>
      <h3>Software</h3>
      <ul>
        {software.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Software;
