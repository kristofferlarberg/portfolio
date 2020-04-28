import React from "react";
import Category from "./Category";
import Figure from "./Figure";
import Footer from "./Footer";

const Post = ({ projects, showDetails }) => {
  let item = projects.find((item) => item.id === showDetails);
  if (!item) {
    return;
  }
  return (
    <article>
      <section className="title">
        <h1>{item.title}</h1>
      </section>
      <Category projects={projects} showDetails={showDetails} />
      <Figure projects={projects} showDetails={showDetails} />
      <section>
        <p>{item.description}</p>
        <p>
          {item.url ? (
            <a target="_blank" rel="noopener noreferrer" href={item.url}>
              {item.url}
            </a>
          ) : null}
        </p>
      </section>
      {item.role ? (
        <Footer projects={projects} showDetails={showDetails} />
      ) : null}
    </article>
  );
};

export default Post;
