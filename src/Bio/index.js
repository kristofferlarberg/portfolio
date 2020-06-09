import React from "react";
import styled from "styled-components";



const Container = styled.div`
  background-color: var(--color);
  border-top: 1px solid black;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid black 1px;
`;

const Bio = ({ bio, color }) => {
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
