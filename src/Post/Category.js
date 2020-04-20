import React from "react";

const Category = ({ projects, showDetails }) => {
  let item = projects.find((item) => item.id === showDetails);
  if (!item) {
    return;
  }
  return (
    <section className="categories">
      {item.category[0] ? (
        <section className="category">
          <h4 className="category">{item.category[0]}</h4>
        </section>
      ) : null}
      {item.category[1] ? (
        <section className="category">
          <h4 className="category">{item.category[1]}</h4>
        </section>
      ) : null}
    </section>
  );
};

export default Category;
