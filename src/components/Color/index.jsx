import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-top: 1px solid black;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid black 1px;
`;

const Color = () => (
  <Container>
    <section>
      <p>
        The colors of this website are selected from sections of the color
        wheel and decided upon the current experienced temperature in
        Stockholm.
      </p>
    </section>
  </Container>
);

export default Color;
