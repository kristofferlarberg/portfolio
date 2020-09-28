import React from "react";
import Languages from "./Languages";
import Software from "./Software";
import FrameLib from "./FrameLib";
import Tools from "./Tools";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  box-sizing: border-box;
  margin-top: 0;
  padding: 3rem;
  background-color: var(--color);
  border-radius: 20px;
  @media (max-width: 1000px) {
  }
`;

const Grid = styled.section`
  width: 100%;
  margin: 0;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const GridItem = styled.div`
  color: white;
`;

const TopLeft = styled(GridItem)`
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  padding: 0 3rem 2rem 0;
`;

const TopRight = styled(GridItem)`
  border-bottom: 1px solid white;
  padding: 0 0 2rem 3rem;
`;

const BottomLeft = styled(GridItem)`
  border-right: 1px solid white;
  padding: 3rem 3rem 0 0;
`;

const BottomRight = styled(GridItem)`
  padding: 3rem 0 0 3rem;
`;

const SubHeader = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Tech = (props) => {
  return (
    <Container>
      <Grid>
        <TopLeft>
          <SubHeader>Languages</SubHeader>
          <Languages languages={props.languages} />
        </TopLeft>
        <TopRight>
          <SubHeader>Frameworks/Libraries</SubHeader>
          <FrameLib frameLib={props.frameLib} />
        </TopRight>
        <BottomLeft>
          <SubHeader>Tools</SubHeader>
          <Tools tools={props.tools} />
        </BottomLeft>
        <BottomRight>
          <SubHeader>Software</SubHeader>
          <Software software={props.software} />
        </BottomRight>
      </Grid>
    </Container>
  );
};
export default Tech;
