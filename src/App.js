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
    title: `Crawl - en kunskapsimport från kolonierna`,
    description: '"Simstilen crawl existerade i det antika Grekland och Rom. Det var inte så konstigt. Det hade crawlats i Medelhavet alltsedan dynastiernas Egypten och längs mesopotamiska floder under assyriernas imperier. Och det var långt fler runt om i världen som nyttjade tekniken som gick ut på att ligga på magen och föra armarna alternerade över huvudet för att sedan fortsätta den vevande armrörelsen under vattnet. Benen hjälpte till att hålla fart och styra den hjulångare överkroppen blivit. I Polynesien crawlades det och även bland nordamerikanska urbefolkningar. Kulturer längs den afrikanska västkusten crawlade så bra att kunskapen var eftertraktad i slavhandeln. Afrikaners simkunskaper blev även till redskap i ett otal flyktförsök. I dessa kulturer och fler fanns det en crawlhistoria kvar i kropparna. Det fanns det inte i Väst. Och Sid Cavill fick sin livs match på Samoa."',
    img: './img/01.png',
    url: 'https://sverigesradio.se/sida/avsnitt/702087?programid=503',
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
    id: 2,
  },
  {
    title: `This Is How Scandinavia Got Great`,
    description: '"The 19th-century Nordic elites did something we haven’t been able to do in this country recently. They realized that if their countries were to prosper they had to create truly successful “folk schools” for the least educated among them. They realized that they were going to have to make lifelong learning a part of the natural fabric of society."',
    img: './img/04.jpg',
    url: 'https://www.nytimes.com/2020/02/13/opinion/scandinavia-education.html',
    role: '',
    category: '',
    team: '',
    format: '',
    method: '',
    github: '',
    credits: [['Photo: Karl Heinz Hernried'], []],
    id: 3,
  },
  {
    title: `Anni Albers and Ancient American Textiles`,
    description: '"At the time Anni Albers wrote On Weaving in 1965, few discussions of Andean textiles “as art” had appeared in weaving textbooks, but there were numerous publications, many of which were German books published between 1880 and 1929, that documented and described their visual and technical properties. Albers almost single-handedly introduced weaving students to this ancient textile art through her writing and her artistic work."',
    img: './img/06.png',
    url: 'http://www.bauhaus-imaginista.org/articles/771/anni-albers-and-ancient-american-textiles',
    role: '',
    category: '',
    team: '',
    format: '',
    method: '',
    github: '',
    credits: [['Photo: Steve Bowbrick'], ['https://creativecommons.org/licenses/by/2.0/']],
    id: 4,
  },
];

const info = [
  {
    description: `I’m a Stockholm based front-end developer and graphic designer who has been active as a graphic designer since 2014, often in close collaboration with clients. The last few years I’ve started making a shift from working solely with design towards focusing more on web development. What I like to do most is thorough research and conceptual development executed with attention to detail as well as overall functionality. `,
    img: './img/portrait.jpg',
    credits: [['Photo: Anna Drvnik'], ['']],
    id: 0,
    email: 'mail@kristofferlarberg.se',
    github: 'https://github.com/kristofferlarberg',
    linkedin: 'https://se.linkedin.com/in/kristofferlarberg',
    link: 'https://www.are.na/kristoffer-larberg',
    tech: 'https://www.kristoffer-larberg.surge',
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
              <About
                info={info}
              />
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


