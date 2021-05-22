import React from "react";
import Post from "../Post";

const Previews = (props) => {
  return (
    <>
      {props.projects.map((item, i) => (
        <Post
          key={i}
          projects={item.projects}
          category={item.category}
          title={item.title}
          description={item.description}
          url={item.url}
          role={item.role}
          tools={item.tools}
          team={item.team}
          format={item.format}
          img={item.img}
          github={item.github}
        />
      ))}
    </>
  );
};
export default Previews;
