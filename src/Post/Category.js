import React from "react";
import styled from "styled-components";


const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 0 6rem 0;
  @media (max-width: 1000px) {
    width: calc(100vw - 4rem);
    display: flex;
    align-items: flex-start;
    margin: 0 2rem 5rem 2rem;
  }
`;


const SubSection = styled.section`
  border: solid 1px black;
  padding: 2rem 2rem 2.1rem 2rem;
  border-radius: 35px;
  margin: 0 1.5rem 0 0;
  width: auto;
  background-color: black;
  color: white;
`;





const Category = (props) => {

  return (
    <Section>
      {props.category[0] ? (
        <SubSection>
          <h5 className="category">{props.category[0]}</h5>
        </SubSection>
      ) : null}
      {props.category[1] ? (
        <SubSection>
          <h5 className="category">{props.category[1]}</h5>
        </SubSection>
      ) : null}
    </Section>
  );
};

export default Category;
