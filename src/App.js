import React, { Component } from 'react';
import About from './About';
import Previews from './Previews';
import Header from './Header';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
    title: 'Quire',
    description: 'Notebook browser app build with Quill.',
    img: './img/6.png',
    url: '',
    role: 'Developer',
    category: 'Development',
    team: ['Amanda Olsson', ' Martin Lindén', ' Nick Magnusson'],
    format: 'Website',
    method: ['JavaScript', ', ', 'HTML', ', ', 'CSS',],
    github: 'https://github.com/amol0900/fe19tp1_-team-ink-',
    id: 1,
  },
  
  {
    title: 'Konsthall C',
    description: 'Konsthall C is a gallery is located in the suburb of Hökarängen in Stockholm with an artistic direction and theme that changes every two years, in addition to certain fixed formats and events. The filtering function makes it easy to take part of all past events, an important aspect of the previous website. The design also builds upon previous use of colours and the typeface Georgia.',
    img: './img/2.png',
    url: 'https://konsthallc.se/',
    role: 'Designer',
    category: 'Design',
    team: 'Sanna Frese (Development)',
    format: 'Website',
    method: ['Layout', ', ', 'Typography', ', ', 'UI'],
    github: '',
    id: 2,
  },

  {
    title: 'Helena Kågebrand',
    description: 'Portfolio website for glass artist and 3d printing technician Helena Kågebrand. The website functions as an archive collecting Helena Kågebrands practise which spans over 20 years. ',
    img: './img/4.jpg',
    url: 'http://helenakagebrand.com/',
    role: ['Designer', ', ', 'Developer'],
    category: ['Development', ', ', 'Design'],
    team: '',
    format: 'Portfolio Website',
    method: ['Layout', ', ', 'Typography', ', ', 'JavaScript', ', ', 'HTML', ', ', 'CSS', ', ', 'PHP'],
    id: 3,
  },

];


const info = [
  {
    description: `I’m a Stockholm based front-end developer and graphic designer who has been active as a graphic designer since 2014, often in close collaboration with clients. The last few years I’ve started making a shift from working solely with design towards focusing more on web development. What I like to do most is thorough research and conceptual development executed with attention to detail as well as overall functionality. `,
    email: 'mail@kristofferlarberg.se',
    github: 'https://github.com/kristofferlarberg',
    linkedin: 'https://se.linkedin.com/in/kristofferlarberg',
    link: 'https://www.are.na/kristoffer-larberg',
    img: './img/portrait.jpg',
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


