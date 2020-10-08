import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  projects,
  bio,
  contact,
  links,
  languages,
  frameLib,
  software,
  tools,
} from "./data";
import { GlobalStyle } from "./styles/global";
import Previews from "./components/Previews";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Main = styled.main`
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  margin: 0;
  background-color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const App = (props) => {
  const [data, setData] = useState(null);
  const [color, setColor] = useState("");
  const [scroll, setScroll] = useState(0);
  const [barWidth, setBarWidth] = useState("");
  const [content, setContent] = useState({
    projects,
    bio,
    contact,
    languages,
    frameLib,
    tools,
    software,
    links,
  });

  const onScroll = () => {
    let currentPosition = window.pageYOffset;
    setScroll(currentPosition);
  };

  const getBarWidth = () => {
    let width = window.innerWidth - document.documentElement.clientWidth;
    setBarWidth(width);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric"
      );
      if (result) {
        let weather = result.data.main.feels_like;

        if (weather >= -30 && weather <= -20) {
          setColor("black"); //black
        } else if (weather >= -20 && weather <= -10) {
          setColor("#bac8ff"); //indigo
        } else if (weather >= -10 && weather <= 0) {
          setColor("#e5dbff"); //violet
        } else if (weather >= 0 && weather <= 10) {
          setColor("#20c997"); //green
        } else if (weather >= 10 && weather <= 20) {
          setColor("#ffd43b"); //yellow
        } else if (weather >= 20 && weather <= 30) {
          setColor("#ff922b"); //orange
        } else {
          setColor("black"); //black
        }
        return setData(result.data);
      } else {
        console.log("NO RESULT");
      }
    };
    fetchData();

    getBarWidth();

    window.addEventListener("scroll", onScroll);
  }, []);

  console.log(scroll);

  return (
    <>
      <GlobalStyle color={color} barWidth={barWidth} />
      <Main>
        <Nav scroll={scroll} bio={content.bio} links={content.links} />
        <Previews projects={content.projects} />
        <Footer
          scroll={scroll}
          contact={content.contact}
          languages={content.languages}
          frameLib={content.frameLib}
          tools={content.tools}
          software={content.software}
          bio={content.bio}
          links={content.links}
        />
      </Main>
    </>
  );
};

export default App;
