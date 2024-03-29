import React from 'react';
import styled from 'styled-components';

import FrameLibs from './FrameLibs';
import Languages from './Languages';
import Software from './Software';
import Tools from './Tools';

const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1000px) {
    height: auto;
    align-items: center;
  }
`;

const GridContainer = styled.section`
  width: 100%;
  margin-top: 0;
  padding: 3.5rem 3rem 3rem 3rem;
  box-sizing: border-box;
  background-color: black;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  @media (max-width: 1000px) {
  }
`;

const Grid = styled.section`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const GridItem = styled.div`
  color: white;
`;

const One = styled(GridItem)`
  padding: 0 3rem 2rem 0;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  @media (max-width: 1000px) {
    padding: 0 0 2rem 0;
    border-right: 0;
  }
`;

const Two = styled(GridItem)`
  border-bottom: 1px solid white;
  padding: 0 0 2rem 3rem;
  @media (max-width: 1000px) {
    padding: 3rem 0 2rem 0;
  }
`;

const Three = styled(GridItem)`
  border-right: 1px solid white;
  padding: 3rem 3rem 0 0;
  @media (max-width: 1000px) {
    border-right: 0;
    border-bottom: 1px solid white;
    padding: 3rem 0 2rem 0;
  }
`;

const Four = styled(GridItem)`
  padding: 3rem 0 0 3rem;
  @media (max-width: 1000px) {
    padding: 3rem 0 0 0;
  }
`;

const Header = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 5rem 0 0 0;
  padding: 2.5rem 3rem 0 3rem;
  width: 100%;
  box-sizing: border-box;
  color: white;
  text-align: center;
  background-color: black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @media (max-width: 1000px) {
    margin-left: 0;
    font-size: 1.7rem;
  }
`;

const SubHeader = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Tech = ({scroll, tech}) => {
  const {
    languages,
    frameLibs,
    tools,
    software,
  } = tech;

  return (
    <Container scroll={scroll}>
      <Header>Skills</Header>
      <GridContainer>
        <Grid>
          <One>
            <SubHeader>Languages</SubHeader>
            <Languages languages={languages} />
          </One>
          <Two>
            <SubHeader>Frameworks/Libraries</SubHeader>
            <FrameLibs frameLibs={frameLibs} />
          </Two>
          <Three>
            <SubHeader>Tools</SubHeader>
            <Tools tools={tools} />
          </Three>
          <Four>
            <SubHeader>Software</SubHeader>
            <Software software={software} />
          </Four>
        </Grid>
      </GridContainer>
    </Container>
  );
};

export default Tech;
