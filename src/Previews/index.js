import React from "react";
import styled from "styled-components";
import Post from "../Post";

const Previews = (props) => {

  return (
    <main>
      {props.projects.map((item, i) => (
        <Post
          key={i}
          projects={item.projects}
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

