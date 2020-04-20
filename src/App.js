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
    title: "Konsthall C",
    description:
      "Konsthall C is an artistic space located in the suburb of Hökarängen in Stockholm with a direction and theme that changes every two years, in addition to certain fixed formats and events. The filtering function makes it easy to take part of all past events, an important aspect of the previous website. The design also builds upon previous use of colours and the typeface Georgia.",
    img: "./img/konsthallc.png",
    url: "https://konsthallc.se/",
    role: "Designer",
    category: [["Design"]],
    team: "Sanna Frese (Development)",
    format: "Website",
    method: [["Layout"], ["Typography"], ["UI"]],
    github: "",
    credits: "",
    id: uuidv4(),
  },
  {
    title: "The Sucker, the Sucker!",
    description:
      '"Peter Godfrey-Smith is a philosopher and diver who has been studying octopuses and other cephalopods in the wild, mostly off the coast of his native Sydney, for years. The alienness of octopuses, in his view, provides an opportunity to reflect on the nature of cognition and consciousness without simply projecting from the human example. Because of their evolutionary distance from us, octopuses are an ‘independent experiment in the evolution of large brains and complex behaviour’. Insofar as we are able to make intelligent contact with them – to understand octopuses and have them understand us – it is ‘not because of a shared history, not because of kinship, but because evolution built minds twice over’. The potential worry is that the evolutionary chasm between us and the octopus is too great to make mutual intelligibility possible. In that case the octopus will have something to teach us about the limits of our own understanding."',
    img: "./img/03.png",
    url:
      "https://www.lrb.co.uk/the-paper/v39/n17/amia-srinivasan/the-sucker-the-sucker",
    role: "",
    category: "",
    team: "",
    format: "",
    method: "",
    github: "",
    credits: [
      ["Photo: edmondlafoto"],
      ["https://pixabay.com/users/edmondlafoto-7913128/"],
    ],
    id: uuidv4(),
  },
  {
    title: `This Is How Scandinavia Got Great`,
    description:
      '"The 19th-century Nordic elites did something we haven’t been able to do in this country recently. They realized that if their countries were to prosper they had to create truly successful “folk schools” for the least educated among them. They realized that they were going to have to make lifelong learning a part of the natural fabric of society."',
    img: "./img/04.jpg",
    url:
      "https://www.nytimes.com/2020/02/13/opinion/scandinavia-education.html",
    role: "",
    category: "",
    team: "",
    format: "",
    method: "",
    github: "",
    credits: [["Photo: Karl Heinz Hernried"], []],
    id: uuidv4(),
  },
  {
    title: `Anni Albers and Ancient American Textiles`,
    description:
      '"At the time Anni Albers wrote On Weaving in 1965, few discussions of Andean textiles “as art” had appeared in weaving textbooks, but there were numerous publications, many of which were German books published between 1880 and 1929, that documented and described their visual and technical properties. Albers almost single-handedly introduced weaving students to this ancient textile art through her writing and her artistic work."',
    img: "./img/06.png",
    url:
      "http://www.bauhaus-imaginista.org/articles/771/anni-albers-and-ancient-american-textiles",
    role: "",
    category: "",
    team: "",
    format: "",
    method: "",
    github: "",
    credits: [
      ["Photo: Steve Bowbrick"],
      ["https://creativecommons.org/licenses/by/2.0/"],
    ],
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
  {
    title: "PHP",
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
