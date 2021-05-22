import React from "react";
import styled from "styled-components";

const FigSection = styled.section`
  width: 100%;
  padding: 0;
  margin: 0;
  @media (max-width: 1000px) {
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
`;

const FigCaption = styled.figcaption`
  width: 100%;
  padding: 0;
  margin: 0;
  @media (max-width: 1000px) {
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
`;

const Caption = styled.h4`
  padding: 0;
  margin: 1rem 0 0 0;
  line-height: 0;
  @media (max-width: 1000px) {
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
`;

const Figure = (props) => {
  return (
    <>
      {props.img.map((item) => (
        <FigSection key={item.id}>
          <img src={item.img} alt="Documentation"></img>
          {item.credits ? (
            <FigCaption>
              <Caption>{item.credits}</Caption>
            </FigCaption>
          ) : null}
        </FigSection>
      ))}
    </>
  );
};

export default Figure;
