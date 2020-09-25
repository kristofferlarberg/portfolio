import React from "react";
import styled from "styled-components";

  const FigureSection = styled.section`
    width: 100%;
    padding: 0;
    margin: 0 2rem 0 2rem;
    @media (max-width: 1000px) {
      box-sizing: border-box;
      margin-bottom: 1rem;
    }
  `;


const Figure = (props) => {
 
  return (
    <>
      {props.img.map((item) => (
        <FigureSection key={item.id}>
    
            <img src={item.img} alt="Documentation"></img>
        
          {item.credits ? (
            <figcaption>
              <h5 className="caption">{item.credits}</h5>
            </figcaption>
          ) : null}
        </FigureSection>
      ))}
    </>
  );
};

export default Figure;

