import React, { Component } from 'react';
import Post from './Post';
import About from './About';
import Previews from './Previews';
import Header from './Header';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const categories = [
  {
    name: 'Design',
    objectID: 0,
  },
  {
    name: 'Development',
    objectID: 1,
  },
];

const projects = [
  {
    title: 'oliviaberkowicz.com',
    description: 'The site and its design is based on a simple layout which can be used in a variety of ways depending on the type of content. The idea is to expand the site over time, a strategy adjusted to their financial preconditions.',
    img: '/img/1.jpg',
    category: 'design',
    team: 'Per Sturesson',
    format: 'Portfolio Website',
    method: ['Layout', 'Typography', 'UI'],
    objectID: 100,
  },
  {
    title: 'konsthallc.se',
    description: 'Konsthall C is a gallery is located in the suburb of Hökarängen in Stockholm with an artistic direction and theme that changes every two years, in addition to certain fixed formats and events. I’m especially happy about the filtering function making it easy to take part of all past events, an important aspect of the previous website. Also, the design builds upon previous use of colours and the typeface Georgia.',
    img: '/img/2.png',
    category: 'design',
    team: 'Sanna Frese',
    format: 'Website',
    method: ['Layout', 'Typography', 'UI'],
    objectID: 0,
  },
  {
    title: 'podpoesipress.se',
    description: 'Podpoesi Press is a publisher of poetry from emerging writers and artists.',
    img: '/img/3.png',
    category: ['development', 'design'],
    team: '',
    format: 'Portfolio Website',
    method: ['Layout', 'Typography', 'Javascript', 'HTML', 'CSS', 'PHP'],
    objectID: 1,
  },
];

const info = [
  {
    description: 'I am a Developer and graphic designer based in Stockholm, Sweden. Interested in visual information structures and how they are influenced by digital tools.This site is a work in process and will change and grow over time.',
    email: 'mail@kristofferlarberg.se',
    github: 'https://github.com/kristofferlarberg',
    objectID: 0,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories,
      projects,
      info,
    };
    //Bind here
  }

  render() {
    const { categories, projects, info } = this.state;
    return (
      <Router>
        <div className="App">
          <Header categories={categories} />

          <Switch>
            <Route path='/about'>
              <About info={info} />
            </Route>
            <Route path='/previews'>
              <Previews projects={projects} />
            </Route>
            <Route path='/'>
              <Previews projects={projects} />
            </Route>
          </Switch>


        </div>
      </Router>
    );
  }

}

export default App;


