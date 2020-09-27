import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Category from "./Category";
import Figure from "./Figure";
import Footer from "./Footer";

const Article = styled.article`
  width: 100vw;
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 12rem;
  box-sizing: border-box;
  transition: max-height 0.6s ease;
  background-color: #efefef;
  -webkit-box-shadow: -1px -7px 9px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -7px 9px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -7px 9px 0px rgba(0, 0, 0, 0.2);
  cursor: cell;
  &:nth-child(2) {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  @media (max-width: 1000px) {
    width: 100vw;
    margin-bottom: 6rem;
    padding: 0 2rem;
  }
`;

const ExpandContent = styled.section`
  display: flex;
  width: 100%;
  margin: 4rem 0 2rem 0;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 3rem 2rem 0 2rem;
  }
`;

const ExpandedContent = styled.section`
  max-height: ${(props) => props.height}rem;
  overflow: hidden;
  transition: max-height 0.6s ease;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3rem 0 0 0;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 3rem 2rem 0 2rem;
  }
`;

const Post = (props) => {
  const [toggleExpand, setToggleExpand] = useState(false);
  const [height, setHeight] = useState("5");

  const content = useRef(null);

  const expandClick = () => {
    setToggleExpand(toggleExpand === false ? true : false);
    setHeight(toggleExpand === true ? "5" : `${content.current.scrollHeight}`);
  };
  console.log(toggleExpand);
  console.log(height);

  return (
    <Article onClick={expandClick}>
      <ExpandContent>
        <h1>{props.title}</h1>
        <Category category={props.category} />
      </ExpandContent>

      <ExpandedContent ref={content} height={height}>
        <Figure img={props.img} />
        <Section>
          <p>{props.description}</p>
          <p>
            {props.url ? (
              <a target="_blank" rel="noopener noreferrer" href={props.url}>
                {props.url}
              </a>
            ) : null}
          </p>
        </Section>
        {props.role ? (
          <Footer
            role={props.role}
            method={props.method}
            team={props.team}
            format={props.format}
            github={props.github}
          />
        ) : null}
      </ExpandedContent>
    </Article>
  );
};

export default Post;
