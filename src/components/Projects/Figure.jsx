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

const Figure = ({img, video}) => (
  <PostFigure>
    {/* eslint-disable */}
    {video &&
      <video controls autoPlay={false}>
        <source src={video} type="video/mp4" />
        <p>A video scrolling through the website.</p>
      </video>
    }
    {img && <img alt="Documentation" src={img} />}
  </PostFigure>
);

export default Figure;
