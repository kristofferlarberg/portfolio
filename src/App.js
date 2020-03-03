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

const API = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric';

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
    title: 'Front crawl',
    description: '"The face-down swimming position allows for a good range of motion of the arm in the water, as compared to the backstroke, where the hands cannot be moved easily along the back of the spine. The above-water recovery of the stroke reduces drag, compared to the underwater recovery of breaststroke. The alternating arms also allow some rolling movement of the body for an easier recovery compared to, for example, butterfly. Finally, the alternating arm stroke makes for a relatively constant speed throughout the cycle."',
    img: './img/01.png',
    url: 'https://en.wikipedia.org/wiki/Front_crawl',
    role: '',
    category: '',
    team: '',
    format: '',
    method: '',
    github: '',
    credits: [['Photo: Chris Lawton'], ['https://unsplash.com/@chrislawton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']],
    id: 1,
  },
  
  {
    title: `The story behind Kurt Cobain's Fender Jaguar`,
    description: '"By 30 August 1992, Nirvana were headlining at Reading Festival and had arguably become the biggest band in the world. In the 11 months since its release, Nevermind had established itself as the rallying cry of youth culture, and those honest, punk- infused 43 minutes had changed lives, music and attitudes.They had reclaimed rock from the clutches of hair metal and elevated a conflicted Cobain to the reluctant position of spokesperson for a generation. Nirvana had also played Reading the year before. Back then, the band appeared sixth on Friday’s bill, but this time they would close the main stage on the last night of the festival.Speculations about Cobain’s health and heroin addiction were rife, and many were questioning whether the frontman would even show. He did, but in reaction Kurt was pushed onstage in a wheelchair by journalist Everett True, stood to address the crowd and feigned a collapse. When he returned to his feet, Cobain was handed his 1965 Fender Jaguar."',
    img: './img/02.png',
    url: 'https://www.musicradar.com/news/the-story-behind-kurt-cobains-fender-jaguar',
    role: '',
    category: '',
    team: '',
    format: '',
    method: '',
    github: '',
    credits: [[], []],
    id: 2,
  },

  {
    title: 'The Sucker, the Sucker!',
    description: '"Peter Godfrey-Smith is a philosopher and diver who has been studying octopuses and other cephalopods in the wild, mostly off the coast of his native Sydney, for years. The alienness of octopuses, in his view, provides an opportunity to reflect on the nature of cognition and consciousness without simply projecting from the human example. Because of their evolutionary distance from us, octopuses are an ‘independent experiment in the evolution of large brains and complex behaviour’. Insofar as we are able to make intelligent contact with them – to understand octopuses and have them understand us – it is ‘not because of a shared history, not because of kinship, but because evolution built minds twice over’. The potential worry is that the evolutionary chasm between us and the octopus is too great to make mutual intelligibility possible. In that case the octopus will have something to teach us about the limits of our own understanding."',
    img: './img/03.png',
    url: 'https://www.lrb.co.uk/the-paper/v39/n17/amia-srinivasan/the-sucker-the-sucker',
    role: '',
    category: '',
    team: '',
    format: '',
    method: '',
    github: '',
    credits: [['Photo: edmondlafoto'], ['https://pixabay.com/users/edmondlafoto-7913128/']],
    id: 4,
  },
  {
    title: `This Is How Scandinavia Got Great`,
    description: '"The 19th-century Nordic elites did something we haven’t been able to do in this country recently. They realized that if their countries were to prosper they had to create truly successful “folk schools” for the least educated among them. They realized that they were going to have to make lifelong learning a part of the natural fabric of society."',
    img: './img/04.png',
    url: 'https://www.nytimes.com/2020/02/13/opinion/scandinavia-education.html',
    role: '',
    category: '',
    team: '',
    format: '',
    method: '',
    github: '',
    credits: [['Matthias Stom, "Young man reading by candlelight"'], []],
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
    credits: 'Photo: Anna Drvnik',
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
          <Header 
            categories={categories} 
            projects={projects} 
            showDetails={showDetails} 
            toggleShowDetails={this.toggleShowDetails.bind(this)} 
            weather={weather} 
          />
          <Switch>
            <Route path='/about'>
              <About info={info}/>
            </Route>
            <Route path='/'>
              <Previews 
                showDetails={showDetails} 
                toggleShowDetails={this.toggleShowDetails.bind(this)} 
                projects={projects} 
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


