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
            <div className="preview-title">
              <h4 className="preview">{item.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  </main>
);

export default Previews;
