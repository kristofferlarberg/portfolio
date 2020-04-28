import React from "react";

const Figure = ({ projects, showDetails }) => {
  let item = projects.find((item) => item.id === showDetails);
  if (!item) {
    return;
  }
  return (
    <>
      {item.img.map((item) => (
        <figure key={item.id}>
          <img src={item.img} key={item.id} alt="Documentation"></img>
          {item.credits ? (
            <figcaption>
              <h5 className="caption">{item.credits}</h5>
            </figcaption>
          ) : null}
        </figure>
      ))}
    </>
  );
};

export default Figure;
