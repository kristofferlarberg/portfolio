import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import data from './data';
import GlobalStyle from './styles/global';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './components/Projects';

const Main = styled.main`
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  margin: 0;
  background-color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const App = () => {
  const [color, setColor] = useState('');
  const [scroll, setScroll] = useState(0);

  const {
    projects,
    bio,
    contact,
    links,
    tech,
  } = data;

  const onScroll = () => {
    const currentPosition = window.pageYOffset;
    setScroll(currentPosition);
  };

  const fetchColorData = async () => {
    const result = await axios(
      'https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric',
    );
    if (result) {
      const weather = result.data.main.feels_like;

      if (weather >= -20 && weather <= -10) {
        setColor('#bac8ff'); // indigo
      }
      else if (weather >= -10 && weather <= 0) {
        setColor('#e5dbff'); // violet
      }
      else if (weather >= 0 && weather <= 10) {
        setColor('#20c997'); // green
      }
      else if (weather >= 10 && weather <= 20) {
        setColor('#ffd43b'); // yellow
      }
      else if (weather >= 20 && weather <= 30) {
        setColor('#ff922b'); // orange
      }
      else {
        setColor('white'); // black
      }
    }
  };

  useEffect(() => {
    fetchColorData();
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <GlobalStyle color={color} />
      <Main>
        <Nav bio={bio} links={links} />
        <Projects projects={projects} />
        <Footer
          contact={contact}
          links={links}
          scroll={scroll}
          tech={tech}
        />
      </Main>
    </>
  );
};

export default App;
