import React from "react";

const Category = (props) => {
  console.log(props.category[0]);
  return (
    <section className="categories">
      {props.category[0] ? (
        <section className="category">
          <h5 className="category">{props.category[0]}</h5>
        </section>
      ) : null}
      {props.category[1] ? (
        <section className="category">
          <h5 className="category">{props.category[1]}</h5>
        </section>
      ) : null}
    </section>
  );
};

export default Category;
