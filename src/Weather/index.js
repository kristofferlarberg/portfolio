import React from "react";
import styled from "styled-components";

const WeatherBox = styled.div`
  font-family: "hk_groteskregular", sans-serif;
  font-size: 2.5rem;
  letter-spacing: -0.02rem;
  font-weight: 400;
  background-color: white;
  border: 0;
  border-radius: 10px;
  padding: 1rem 1.5rem 1rem 1.5rem;
`;
const One = styled(WeatherBox)`
  background-color: rgba(0, 0, 255, 1);
`;

const Two = styled(WeatherBox)`
  background-color: rgba(0, 0, 255, 0.7);
`;

const Three = styled(WeatherBox)`
  background-color: rgba(0, 0, 255, 0.5);
`;

const Four = styled(WeatherBox)`
  background-color: rgba(0, 0, 255, 0.2);
`;

const Five = styled(WeatherBox)`
  background-color: rgba(0, 255, 0, 0.5);
`;

const Six = styled(WeatherBox)`
  background-color: rgba(255, 0, 0, 0.2);
`;

const Seven = styled(WeatherBox)`
  background-color: rgba(255, 0, 0, 0.4);
`;

const Eight = styled(WeatherBox)`
  background-color: rgba(255, 0, 0, 0.6);
`;

const Nine = styled(WeatherBox)`
  background-color: rgba(255, 0, 0, 0.8);
`;

const Ten = styled(WeatherBox)`
  background-color: rgba(255, 0, 0, 1);
`;

const Eleven = styled(WeatherBox)`
  background-color: rgba(255, 0, 0, 1);
`;

const Twelve = styled(WeatherBox)`
  background-color: rgba(255, 0, 0, 1);
`;

const Weather = (props) => {
  const weather = props.weather;
  if (weather >= -20 && weather <= -15) {
    return <One>{props.children}</One>;
  } else if (weather >= -15 && weather <= -10) {
    return <Two>{props.children}</Two>;
  } else if (weather >= -10 && weather <= -5) {
    return <Three>{props.children}</Three>;
  } else if (weather >= -5 && weather <= 0) {
    return <Four>{props.children}</Four>;
  } else if (weather >= 0 && weather <= 5) {
    return <Five>{props.children}</Five>;
  } else if (weather >= 5 && weather <= 10) {
    return <Six>{props.children}</Six>;
  } else if (weather >= 10 && weather <= 15) {
    return <Seven>{props.children}</Seven>;
  } else if (weather >= 15 && weather <= 20) {
    return <Eight>{props.children}</Eight>;
  } else if (weather >= 20 && weather <= 25) {
    return <Nine>{props.children}</Nine>;
  } else if (weather >= 25 && weather <= 30) {
    return <Ten>{props.children}</Ten>;
  } else if (weather >= 30 && weather <= 35) {
    return <Eleven>{props.children}</Eleven>;
  } else {
    return <Twelve>{props.children}</Twelve>;
  }
};

export default Weather;
