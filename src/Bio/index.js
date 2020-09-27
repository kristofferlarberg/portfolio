import React from "react";
import styled from "styled-components";
import Links from "../Links";

const ShowHide = styled.section`
  margin: 0;
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  overflow: auto;
  width: auto;
  height: auto;
  background-color: var(--color);
  border-radius: 20px;

  /*   height: ${(props) => (props.scroll ? "auto" : "0")};
  opacity: ${(props) => (props.scroll ? "1" : "0")};
  margin: ${(props) => (props.scroll ? "" : "0px")}; */
`;

const Figure = styled.figure`
  margin-left: 0;
  width: 20%;
  min-width: 20%;
  height: auto;
`;

const Bio = (props) => {
  return (
    <ShowHide /* scroll={props.scroll} */>
      {props.bio.map((item) => (
        <>
 {/*          <Figure>
            <img src={item.img} alt="Portrait"></img>
          </Figure> */}
         <p>{item.description}</p>
 </>
      ))}
    </ShowHide>
  );
};
export default Bio;
