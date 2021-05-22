import React, { useState, useRef } from "react";
import styled from "styled-components";
import Category from "./Category";
import Figure from "./Figure";
import Footer from "./Footer";
import Description from "./Description";

const Article = styled.article`
  width: 100%;
  padding: 0 12rem;
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  align-items: center;
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
    width: 100%;
    padding: 0 2rem;
  }
`;

const Header = styled.section`
  width: 100%;
  margin: 6rem 0 4rem 0;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: left;
    margin: 5rem 0 4rem 0;
  }
`;

const Content = styled.section`
  max-height: ${(props) => props.height}rem;
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const Title = styled.h1`
  margin: 0.3rem 0 0 0;
  @media (max-width: 1000px) {
    margin: 0 0 2rem 0;
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
  return (
    <Article onClick={expandClick}>
      <Header>
        <Title>{props.title}</Title>
        <Category category={props.category} />
      </Header>
      <Content ref={content} height={height}>
        <Figure img={props.img} />
        <Description description={props.description} url={props.url} />
        {props.role ? (
          <Footer
            role={props.role}
            tools={props.tools}
            team={props.team}
            format={props.format}
            github={props.github}
          />
        ) : null}
      </Content>
    </Article>
  );
};

export default Post;
