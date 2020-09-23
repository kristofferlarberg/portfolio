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
`;

const Post = (props) => {
  console.log(props.projects);

  return (
    <Article>
      <section className="title">
        <h1>{props.title}</h1>
      </section>

      <Category category={props.category} />

      <Figure img={props.img} />
      <section>
        <p>{props.description}</p>
        <p>
          {props.url ? (
            <a target="_blank" rel="noopener noreferrer" href={props.url}>
              {props.url}
            </a>
          ) : null}
        </p>
      </section>
      {props.role ? (
        <Footer
          role={props.role}
          method={props.method}
          team={props.team}
          format={props.format}
          github={props.github}
        />
      ) : null}
    </Article>
  );
};

export default Post;
