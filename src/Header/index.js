import React from 'react';
import Weather from '../Weather';
import {
  Link
} from "react-router-dom";



const Header = ({ categories, info, showDetails, projects, toggleShowDetails, weather, }) =>
  <header>
    <nav>
      <Link to="/" className='headerlink'><h2 onClick={() => toggleShowDetails(null)}>Studio Kristoffer Larberg</h2></Link>
    </nav>
    {/* <Filterwork categories={categories} /> */}
    <nav>
      <Weather weather={weather} />
    </nav>
  </header>




export default Header;