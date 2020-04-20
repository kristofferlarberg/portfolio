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
      "Portfolio website for artist Ingela Johansson serving her multi-layered practise in a practictal manner, which makes possible overview and summary.",
    img: "./img/3.png",
    url: "http://ingelajohansson.net/",
    role: "Designer",
    category: [["Design"]],
    team: "Viiksimaisteri (Development)",
    format: "Portfolio Website",
    method: "Layout, Typography, UI",
    github: "",
    id: uuidv4(),
  },
  {
    title: "Riksdagskollen",
    description:
      "The foundation for a web app proposal which visualizes voting data from the Swedish parliament.",
    img: "./img/10.png",
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
    img: "./img/konsthallc.png",
    url: "https://konsthallc.se/",
    role: "Designer",
    category: [["Design"]],
    team: "Sanna Frese (Development)",
    format: "Website",
    method: "Layout, Typography, UI",
    github: "",
    credits: "",
    id: uuidv4(),
  },
  {
    title: "Quire",
    description: "A notebook browser app build with Quill.",
    img: "./img/7.png",
    url: "",
    role: "Developer",
    category: [["Development"]],
    team: "Amanda Olsson, Martin Lindén, Nick Magnusson",
    format: "Website",
    method: "HTML, CSS, JavaScript, Quill",
    github: "https://github.com/amol0900/fe19tp1_-team-ink-",
    id: uuidv4(),
  },
  {
    title: "Olivia Berkowicz",
    description:
      "Portfolio website for curator and writer Olivia Berkowicz. The site and its design is based on a simple layout which can be used in a variety of ways depending on the type of content.",
    img: "./img/1.jpg",
    url: "http://oliviaberkowicz.com/",
    role: "Designer",
    category: [["Design"]],
    team: "Per Sturesson (Development)",
    format: "Portfolio Website",
    method: "Layout, Typography, UI",
    github: "",
    id: uuidv4(),
  },
];

const bio = [
  {
    description: `I’m a Stockholm based front-end developer and graphic designer who has been active as a graphic designer since 2014, often in close collaboration with clients. The last few years I’ve started making a shift from working solely with design towards focusing more on web development. What I like to do most is thorough research and conceptual development executed with attention to detail as well as overall functionality. `,
    img: "./img/portrait.jpg",
    credits: "Photo: Anna Drvnik",
    id: uuidv4(),
  },
];

const contact = [
  {
    email: "mail@kristofferlarberg.se",
    github: "https://github.com/kristofferlarberg",
    linkedin: "https://se.linkedin.com/in/kristofferlarberg",
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
