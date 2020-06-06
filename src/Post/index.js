import React from "react";
import styled from "styled-components";
import Category from "./Category";
import Figure from "./Figure";
import Footer from "./Footer";

const Article = styled.article`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
  border-top: solid black 1px;
`

const Post = ({ projects, showDetails }) => {
  let item = projects.find((item) => item.id === showDetails);
  if (!item) {
    return;
  }
  return (
    <Article>
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
    </Article>
  );
};

export default Post;
