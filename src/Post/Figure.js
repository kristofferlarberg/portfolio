import React from "react";

const Figure = (props) => {
  console.log(props.img);
  return (
    <>
      {props.img.map((item) => (
        <figure key={item.id}>
          <img src={item.img} alt="Documentation"></img>
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
