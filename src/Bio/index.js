import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid black;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  border-top: solid black 1px;
`; 

const Bio = ({ bio }) => {
  return (
    <Container>
      {bio.map((item) => (
        <section key={item.id}>
          <p>{item.description}</p>
        </section>
      ))}
    </Container>
  );
};
export default Bio;
