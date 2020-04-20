import React from "react";
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
            <img src={item.img} className="preview-img" alt="Project"></img>
            <h4 className="top">{item.title}</h4>
          </div>
        );
      })}
    </div>
  </main>
);

export default Previews;
