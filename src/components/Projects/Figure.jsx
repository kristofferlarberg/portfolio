import React from 'react';
import styled from 'styled-components';

const PostFigure = styled.figure`
  width: 100%;
  padding: 0;
  margin: 0;
  @media (max-width: 1000px) {
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
`;

const Figure = ({img}) => (
  <PostFigure>
    <img alt="Documentation" src={img} />
  </PostFigure>
);

export default Figure;
