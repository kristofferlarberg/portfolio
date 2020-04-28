import React, { Component } from "react";
import About from "./About";
import Previews from "./Previews";
import Header from "./Header";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const API =
  "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";

const categories = [
  {
    title: "Design",
    id: uuidv4(),
  },
  {
    title: "Development",
    id: uuidv4(),
  },
];

const projects = [
  {
    title: "Ingela Johansson",
    description:
      "Portfolio website for artist Ingela Johansson, a Stockholm based artist whose research-based artistic practice often responds to site-specific issues with an interest in social history and collective memory. Her interdisciplinary approach combines various aesthetic strategies and media to create an engaging body of work. She works with film, painting, installation, text and photo. The website aims to display this through indexical overview as well as filtering. It is also possible to connect projects with each other and in that way emphasizing recurring themes.",
    img: [{ img: "./img/IJ2.png", id: uuidv4(), credits: "" }],
    preview: "./img/IJ2.png",
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
    img: [
      { img: "./img/RK1.png", id: uuidv4(), credits: "" },
      { img: "./img/RK2.png", id: uuidv4(), credits: "" },
      { img: "./img/RK4.png", id: uuidv4(), credits: "" },
      { img: "./img/RK5.png", id: uuidv4(), credits: "" },
    ],
    preview: "./img/RK1.png",
    url: "",
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
    preview: "./img/KC.png",
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
    preview: "./img/Q.png",
    url: "",
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
    description: `I’m a Stockholm based front-end developer and graphic designer who has been active as a graphic designer since 2014, often in close collaboration with clients. The last few years I’ve started making a shift from working solely with design towards focusing more on web development. What I like to do most is thorough research and conceptual development executed with attention to detail as well as overall functionality. `,
    img: "./img/portrait.png",
    credits: "",
    id: uuidv4(),
  },
];

const contact = [{ contact: "mail@kristofferlarberg.se", id: uuidv4() }];

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories,
      projects,
      showDetails: null,
      intervalId: 0,
      thePosition: false,
      weather: "",
      languages,
      frameLib,
      tools,
      software,
      bio,
      contact,
      links,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ weather: data.main.feels_like }));
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  toggleShowDetails = (id) => {
    this.setState({
      showDetails: id,
    });
  };

  render() {
    const {
      categories,
      projects,
      bio,
      contact,
      showDetails,
      weather,
      languages,
      frameLib,
      tools,
      software,
      links,
    } = this.state;
    return (
      <Router>
        <div className="App">
          <Header
            categories={categories}
            projects={projects}
            showDetails={showDetails}
            toggleShowDetails={this.toggleShowDetails.bind(this)}
            weather={weather}
          />
          <Switch>
            <Route path="/about">
              <About
                bio={bio}
                contact={contact}
                languages={languages}
                frameLib={frameLib}
                tools={tools}
                software={software}
                links={links}
              />
            </Route>
            <Route path="/">
              <Previews
                showDetails={showDetails}
                toggleShowDetails={this.toggleShowDetails.bind(this)}
                projects={projects}
                categories={categories}
                onScrollStep={this.onScrollStep.bind(this)}
                scrollToTop={this.scrollToTop.bind(this)}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
