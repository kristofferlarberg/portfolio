import React from "react";
import styled from "styled-components";
import Post from "../Post";

const Previews = (props) => {
  //<div style={{ borderTop: "1px solid black", width: "100vw" }}></div>

  return (
    <main>
      {props.projects.map((item, i) => (
        <Post
          key={i}
          category={item.category}
          title={item.title}
          description={item.description}
          url={item.url}
          role={item.role}
          method={item.method}
          team={item.team}
          format={item.format}
          img={item.img}
          github={item.github}
        />
      ))}
    </main>
  );
};
export default Previews;

