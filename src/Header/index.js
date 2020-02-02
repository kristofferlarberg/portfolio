import React from 'react';
import Weather from '../Weather';
import {
  Link
} from "react-router-dom";



const Header = ({ categories, info, showDetails, projects, toggleShowDetails, weather, }) =>
  <header>
    <nav>
      <Link to="/"><h2 onClick={() => toggleShowDetails(null)}>Studio Kristoffer Larberg</h2></Link>
    </nav>
    <Weather weather={weather} />
    {/* <Filterwork categories={categories} /> */}
    <nav>
      <Link to="/about"><button>Info</button></Link>
    </nav>
  </header>




export default Header;