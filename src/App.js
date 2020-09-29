import React, { useState, useEffect } from "react";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import "./index.css";
import Previews from "./Previews";
import Nav from "./Nav";
import Footer from "./Footer";

const ColorVariable = styled.div`
  --color: ${(props) => props.color};
  --bar: ${(props) => props.barWidth};
`;

const Main = styled.main`
  width: calc(100vw - --bar);
  box-sizing: border-box;
  text-align: left;
  margin: 0;
  background-color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const projects = [
  {
    title: "Appendix",
    description:
      "A platform which presents the graduate projects from the programs MA Spatial Design and BA Interior Architecture & Furniture Design at Konstfack 2020.",
    img: [{ img: "./img/A.png", id: uuidv4(), credits: "" }],
    url: "https://konstfack2020.se/appendix/",
    role: "Developer, Designer",
    category: [["Development"], ["Design"]],
    team: "Per Sturesson",
    format: "Website",
    method: "HTML, CSS, JavaScript, React, Gatsby",
    github: "https://github.com/kristofferlarberg/appendix",
    credits: "",
    id: uuidv4(),
  },
  {
    title: "Ingela Johansson",
    description:
      "Portfolio website for artist Ingela Johansson, a Stockholm based artist whose research-based artistic practice often responds to site-specific issues with an interest in social history and collective memory. Her interdisciplinary approach combines various aesthetic strategies and media to create an engaging body of work. She works with film, painting, installation, text and photo. The website aims to display this through indexical overview as well as filtering. It is also possible to connect projects with each other and in that way emphasizing recurring themes.",
    img: [{ img: "./img/IJ2.png", id: uuidv4(), credits: "" }],
    url: "http://ingelajohansson.net/",
    role: "Designer",
    category: [["Design"]],
    team: "Viiksimaisteri (Development)",
    format: "Portfolio Website",
    method: "Layout, Typography, UI",
    github: "",
    credits: "",
    id: uuidv4(),
  },
  {
    title: "Riksdagskollen",
    description:
      'The foundation for a web app proposal which visualizes voting data from the Swedish parliament via "The Riksdag’s open data" API. This project was carried out as a team assignment part of a diploma course in front-end development. The assignment had its main focus on React and handling API requests as well as a basic introduction to Firebase. The project also included training in agile methods, especially Scrum.',
    img: [{ img: "./img/RK1.png", id: uuidv4(), credits: "" }],
    url: "https://github.com/kristofferlarberg/fe19tp2_strawberry",
    role: "Developer",
    category: [["Development"]],
    team: "Amanda Olsson, Erik Calmfors, Ismail Güven, Mohmed Salah Ahmed",
    format: "Website",
    method: "HTML, CSS, JavaScript, React",
    github: "https://github.com/kristofferlarberg/fe19tp2_strawberry",
    id: uuidv4(),
  },
  {
    title: "Konsthall C",
    description:
      "Konsthall C is an artistic space located in the suburb of Hökarängen in Stockholm with a direction and theme that changes every two years, in addition to certain fixed formats and events. The filtering function makes it easy to take part of all past events, an important aspect of the previous website. The design also builds upon previous use of colours and the typeface Georgia.",
    img: [{ img: "./img/KC.png", id: uuidv4(), credits: "" }],
    url: "https://konsthallc.se/",
    role: "Designer",
    category: [["Design"]],
    team: "Sanna Frese (Development)",
    format: "Website",
    method: "Layout, Typography, UI",
    github: "",
    id: uuidv4(),
  },
  {
    title: "Quire",
    description:
      "A notebook browser app built with Quill. This project was carried out as a team assignment part of a diploma course in front-end development. The assignment had its main focus on JavaScript, HTML and CSS. The project also included training in agile methods, especially Scrum.",
    img: [{ img: "./img/Q.png", id: uuidv4(), credits: "" }],
    url: "https://github.com/amol0900/fe19tp1_-team-ink-",
    role: "Developer",
    category: [["Development"]],
    team: "Amanda Olsson, Martin Lindén, Nick Magnusson",
    format: "Website",
    method: "HTML, CSS, JavaScript, Quill",
    github: "https://github.com/amol0900/fe19tp1_-team-ink-",
    credits: "",
    id: uuidv4(),
  },
];

const bio = [
  {
    description: `I’m a Stockholm based front-end developer with graphic design experience, often working in close collaboration with clients. The last few years I’ve shifted from graphic design towards web development and am currently studying front-end development. What I do best is thorough research executed with attention to detail and intuitive functionality.`,
    credits: "",
    img: "./img/portrait.png",
    id: uuidv4(),
  },
];

const contact = [
  {
    contact: "mail@kristofferlarberg.se",
    id: uuidv4(),
  },
];

const links = [
  {
    name: "GitHub",
    link: "https://github.com/kristofferlarberg",
    id: uuidv4(),
  },
  {
    name: "LinkedIn",
    link: "https://se.linkedin.com/in/kristofferlarberg",
    id: uuidv4(),
  },
];

const languages = [
  {
    title: "Javascript ES6",
    id: uuidv4(),
  },
  {
    title: "HTML 5",
    id: uuidv4(),
  },
  {
    title: "CSS",
    id: uuidv4(),
  },
  {
    title: "Dart",
    id: uuidv4(),
  },
  {
    title: "PHP",
    id: uuidv4(),
  },
];

const frameLib = [
  {
    title: "React",
    id: uuidv4(),
  },
  {
    title: "Gatsby",
    id: uuidv4(),
  },
  {
    title: "Flutter",
    id: uuidv4(),
  },
  {
    title: "Node.js",
    id: uuidv4(),
  },
];

const tools = [
  {
    title: "Git",
    id: uuidv4(),
  },
  {
    title: "npm",
    id: uuidv4(),
  },
  {
    title: "Prismic",
    id: uuidv4(),
  },
  {
    title: "GraphQL",
    id: uuidv4(),
  },
  {
    title: "Firebase",
    id: uuidv4(),
  },
];

const software = [
  {
    title: "VS Code",
    id: uuidv4(),
  },
  {
    title: "Adobe CC",
    id: uuidv4(),
  },
  {
    title: "Figma",
    id: uuidv4(),
  },
  {
    title: "Glyphs",
    id: uuidv4(),
  },
];
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

  console.log(scroll)

  return (
    <ColorVariable color={color}>
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
    </ColorVariable>
  );
};

export default App;
