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
    description: 'The site and its design is based on a simple layout which can be used in a variety of ways depending on the type of content. The idea is to expand the site over time, a strategy adjusted to their financial preconditions.',
    img: '/img/1.jpg',
    category: 'design',
    team: 'Per Sturesson (Development)',
    format: 'Portfolio Website',
    method: ['Layout, ', 'Typography, ', 'UI'],
    github: 'link',
    id: 1,
  },
  {
    title: 'konsthallc.se',
    description: 'Konsthall C is a gallery is located in the suburb of Hökarängen in Stockholm with an artistic direction and theme that changes every two years, in addition to certain fixed formats and events. I’m especially happy about the filtering function making it easy to take part of all past events, an important aspect of the previous website. Also, the design builds upon previous use of colours and the typeface Georgia.',
    img: '/img/2.png',
    category: 'design',
    team: 'Sanna Frese (Development)',
    format: 'Website',
    method: ['Layout, ', 'Typography, ', 'UI'],
    id: 2,
  },
  {
    title: 'podpoesipress.se',
    description: 'Podpoesi Press is a publisher of poetry from emerging writers and artists.',
    img: '/img/3.png',
    category: ['development', 'design'],
    team: '',
    format: 'Portfolio Website',
    method: ['Layout', ', ', 'Typography', ', ', 'Javascript', ', ', 'HTML', ', ', 'CSS', ', ', 'PHP'],
    id: 3,
  },
];


const info = [
  {
    description: `The last three years I’ve made a shift from working solely with design for print towards working with digital design and development, specifically of websites. I’m especially interested in new different ways of communicating content through publishing on online platforms. `,
    email: 'mail@kristofferlarberg.se',
    github: 'https://github.com/kristofferlarberg',
    linkedin: 'https://se.linkedin.com/in/kristofferlarberg',
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
          <Header categories={categories} projects={projects} showDetails={showDetails} toggleShowDetails={this.toggleShowDetails.bind(this)} />
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


