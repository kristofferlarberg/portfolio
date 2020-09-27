import React from "react";
import Languages from "./Languages";
import Software from "./Software";
import FrameLib from "./FrameLib";
import Tools from "./Tools";
import styled from "styled-components";

const Container = styled.footer`
  width: 50vw;
  background-color: var(--color);
  padding: 2rem;
  margin: 6rem 0;
  border-radius: 20px;
`;

const Grid = styled.section`
  width: 100%;
  margin: 0;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

`;

const Tech = ({ languages, software, frameLib, tools }) => {
  return (
    <Container>
      <h4>Skills</h4>
      <Grid>
        <Languages languages={languages} />
        <FrameLib frameLib={frameLib} />
        <Tools tools={tools} />
        <Software software={software} />
      </Grid>
    </Container>
  );
};
export default Tech;
