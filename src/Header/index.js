import React from 'react';
import {
  Link
} from "react-router-dom";


const Header = ({ categories, info, showDetails, projects, toggleShowDetails }) =>
  <header>
    <nav>
      <Link to="/"  ><h2 onClick={() => toggleShowDetails(null)}>Studio Kristoffer Larberg</h2></Link>
    </nav>
    {/* <Filterwork categories={categories} /> */}
    <nav>
      <Link to="/about"><button>Info</button></Link>
    </nav>
  </header>




export default Header;