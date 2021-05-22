import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  text-align: center;
  margin-top: 5rem;
`;

const Color = () => (
  <Text>
    (The accent color of this website are decided upon the current experienced temperature in
    Stockholm, Sweden.)
  </Text>
);

export default Color;
