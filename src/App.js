import React, { Component } from 'react';
import About from './About';
import Previews from './Previews';
import Header from './Header';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = 'feels_like';
const PARAM_SEARCH = 'main';

const API = 'http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric';


const categories = [
  {
    name: 'Design',
    objectID: 0,
  },
  {
    name: 'Development',
    id: 1,
  },
];

const projects = [
  {
    title: 'oliviaberkowicz.com',
    description: 'Portfolio website for curator and writer Olivia Berkowicz. The site and its design is based on a simple layout which can be used in a variety of ways depending on the type of content. ',
    img: '/img/1.jpg',
    url: 'http://oliviaberkowicz.com/',
    category: 'design',
    role: 'Designer',
    team: 'Per Sturesson (Development)',
    format: 'Portfolio Website',
    method: ['Layout', ', ', 'Typography', ', ', 'UI'],
    github: '',
    id: 1,
  },
  {
    title: 'konsthallc.se',
    description: 'Konsthall C is a gallery is located in the suburb of Hökarängen in Stockholm with an artistic direction and theme that changes every two years, in addition to certain fixed formats and events. The filtering function makes it easy to take part of all past events, an important aspect of the previous website. The design also builds upon previous use of colours and the typeface Georgia.',
    img: '/img/2.png',
    url: 'https://konsthallc.se/',
    role: 'Designer',
    category: 'design',
    team: 'Sanna Frese (Development)',
    format: 'Website',
    method: ['Layout', ', ', 'Typography', ', ', 'UI'],
    github: '',
    id: 2,
  },
  {
    title: 'podpoesipress.se',
    description: 'Podpoesi Press is a publishing label dedicated to publishing emerging poetry.',
    img: '/img/3.png',
    url: 'http://podpoesipress.se/',
    role: ['Designer', ', ', 'Developer'],
    category: ['development', 'design'],
    team: '',
    format: 'Portfolio Website',
    method: ['Layout', ', ', 'Typography', ', ', 'Javascript', ', ', 'HTML', ', ', 'CSS', ', ', 'PHP'],
    github: 'https://github.com/kristofferlarberg/podpoesi-press',
    id: 3,
  },
  {
    title: 'helenakagebrand.com',
    description: 'Portfolio website for glass artist and 3d printing technician Helena Kågebrand. The website functions as an archive collecting Helena Kågebrands practise which spans over 20 years. ',
    img: '/img/4.jpg',
    url: 'http://helenakagebrand.com/',
    role: ['Designer', ', ', 'Developer'],
    category: ['development', 'design'],
    team: '',
    format: 'Portfolio Website',
    method: ['Layout', ', ', 'Typography', ', ', 'Javascript', ', ', 'HTML', ', ', 'CSS', ', ', 'PHP'],
    id: 4,
  },
  {
    title: 'karinlindh.com',
    description: 'Portfolio website for artist Karin Lindh. Karin comes from working with conceptually based art and has in recent years moved towards working almost exclusively with public art commissions. This diversity is reflected in the website functionality.',
    img: '/img/5.jpg',
    url: 'http://karinlindh.com/',
    role: 'Designer',
    category: ['development', 'design'],
    team: 'Sanna Frese (Development)',
    format: 'Portfolio Website',
    method: ['Layout', ', ', 'Typography', ', ', 'Javascript', ', ', 'HTML', ', ', 'CSS', ', ', 'PHP'],
    github: '',
    id: 5,
  },
];


const info = [
  {
    description: `I'm a front-end developer and graphic designer based in Stockholm. The last three years I’ve made a shift from working solely with design for print towards working with digital design and development, specifically of websites. I’m especially interested in new ways of communicating content through publishing on online platforms. `,
    email: 'mail@kristofferlarberg.se',
    github: 'https://github.com/kristofferlarberg',
    linkedin: 'https://se.linkedin.com/in/kristofferlarberg',
    link: 'https://www.are.na/kristoffer-larberg',
    img: '/img/portrait.jpg',
    id: 0,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories,
      projects,
      info,
      showDetails: null,
      intervalId: 0,
      thePosition: false,
      weather: '',
    };
  }
  // showDetails == 1, 2, 3, 4


  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true })
      } else {
        this.setState({ thePosition: false })
      }
    });
    window.scrollTo(0, 0);
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ weather: data.main.feels_like }));
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  toggleShowDetails = (id) => {
    this.setState({
      showDetails: id,
    })

  }

  render() {
    const { categories, projects, info, showDetails, weather, } = this.state;
    return (
      <Router>
        <div className="App">
          <Header categories={categories} projects={projects} showDetails={showDetails} toggleShowDetails={this.toggleShowDetails.bind(this)} weather={weather} />
          <Switch>
            <Route path='/about'>
              <About info={info} weather={weather} />
            </Route>
            <Route path='/'>
              <Previews showDetails={showDetails} toggleShowDetails={this.toggleShowDetails.bind(this)} projects={projects} onScrollStep={this.onScrollStep.bind(this)} scrollToTop={this.scrollToTop.bind(this)} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}


export default App;


