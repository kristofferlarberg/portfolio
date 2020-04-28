import React from "react";

const Bio = ({ bio }) => {
  return (
    <>
      {bio.map((item) => (
        <figure className="portrait" key={item.id}>
          <img
            className="portrait"
            src={item.img}
            alt="Portrait photography by Anna Drvnik."
          ></img>
          <figcaption>
            <h5 className="caption">{item.credits}</h5>
          </figcaption>
        </figure>
      ))}
      {bio.map((item) => (
        <section key={item.id}>
          <p>{item.description}</p>
        </section>
      ))}
    </>
  );
};
export default Bio;
