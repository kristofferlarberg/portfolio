import React from "react";

const Filterwork = ({ categories }) => (
  <nav>
    {categories.map(function (item) {
      return <div className="button">{item.name}</div>;
    })}
  </nav>
);

export default Filterwork;
