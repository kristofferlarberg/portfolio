import React, { useState, useRef } from "react";
import styled from "styled-components";
import Category from "./Category";
import Figure from "./Figure";
import Footer from "./Footer";
import Description from "./Description";

const Article = styled.article`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 12rem;
  box-sizing: border-box;
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
  transition: max-height 0.3s ease;
`;

const Post = (props) => {
  const [toggleExpand, setToggleExpand] = useState(false);
  const [height, setHeight] = useState("5");

  const content = useRef(null);

  const expandClick = () => {
    setToggleExpand(toggleExpand === false ? true : false);
    setHeight(toggleExpand === true ? "5" : `${content.current.scrollHeight}`);
  };
  return (
    <Article onClick={expandClick}>
      <ExpandContent>
        <h1>{props.title}</h1>
        <Category category={props.category} />
      </ExpandContent>
      <ExpandedContent ref={content} height={height}>
        <Figure img={props.img} />
        <Description description={props.description} url={props.url} />
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
