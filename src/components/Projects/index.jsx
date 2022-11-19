import React, {useRef, useState} from 'react';
import styled from 'styled-components';

import Category from './Category';
import Description from './Description';
import Figure from './Figure';
import Footer from './Footer';

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
  max-height: ${props => props.height}rem;
  overflow: hidden;
  transition: max-height 0.3s ease;
  @media (prefers-reduced-motion) {
    transition: max-height 0s;
  }
`;

const Title = styled.h2`
  margin: 0.3rem 0 0 0;
  @media (max-width: 1000px) {
    margin: 0 0 2rem 0;
  }
`;

const Project = ({project}) => {
  const [toggleExpand, setToggleExpand] = useState(false);
  const [height, setHeight] = useState('5');

  const ref = useRef(null);

  const expandClick = (video) => {
    if (!toggleExpand) {
      setToggleExpand(!toggleExpand);
      setHeight(`${ref.current.scrollHeight}`);
    }
    if (toggleExpand && !video) {
      setToggleExpand(!toggleExpand);
      setHeight('5');
    }
  };

  const {
    category,
    description,
    format,
    frameLibs,
    github,
    id,
    img,
    languages,
    title,
    team,
    tools,
    url,
    video,
  } = project;

  return (
    <>
      <Article key={id} onClick={() => expandClick(video)}>
        <Header>
          <Title>{title}</Title>
          <Category category={category} />
        </Header>
        <Content ref={ref} height={height}>
          <Figure img={img} video={video} />
          <Description description={description} url={url} />
          {format ? (
            <Footer
              format={format}
              frameLibs={frameLibs}
              github={github}
              languages={languages}
              team={team}
              tools={tools}
              video={video}
            />
          ) : null}
        </Content>
      </Article>
    </>
  );
};

const Projects = ({projects}) => (
  <>
    {projects.map(project => (
      <Project key={project.id} project={project} />
    ))}
  </>
);

export default Projects;
