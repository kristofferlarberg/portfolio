import React from "react";
import styled from "styled-components";

const ShowHide = styled.section`
  margin: 8rem 0 10rem 0;
  box-sizing: border-box;
/*   width: 100vw;
 */  height: auto;
  height: ${(props) => (props.scroll ? "auto" : "0")};
  opacity: ${(props) => (props.scroll ? "1" : "0")};
  margin: ${(props) => (props.scroll ? "" : "0px")};
`;

const Bio = (props) => {
  return (
    <ShowHide scroll={props.scroll}>
      {props.bio.map((item) => (
        <p>{item.description}</p>
      ))}
    </ShowHide>
  );
};
export default Bio;
