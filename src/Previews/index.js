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

/* 

import React from "react";
import styled from "styled-components";
import Post from "../Post";

const Previews = ({
  projects,
  toggleShowDetails,
  showDetails,
  scrollToTop,
  categories,
}) => (
  <main>
    {showDetails ? (
      <Post
        projects={projects}
        categories={categories}
        showDetails={showDetails}
      />
    ) : null}
    <div style={{ borderTop: "1px solid black", width: "100vw" }}></div>
    <div className="grid">
      {projects.map((item, i) => {
        return (
          <div
            id={i}
            key={item.id}
            onClick={() => {
              toggleShowDetails(item.id);
              scrollToTop();
            }}
          >
            <img src={item.preview} className="preview-img" alt="Project"></img>
            <div className="preview-title">
              <h5 className="preview">{item.title}</h5>
            </div>
          </div>
        );
      })}
    </div>
  </main>
);

export default Previews;
 */
