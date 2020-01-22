import React, { Component } from 'react';

import {
  Link
} from "react-router-dom";


const Header = ({ categories, info }) =>
  <header>
    <nav>
      <Link to="/"><h2>Studio Kristoffer Larberg</h2></Link>
    </nav>
    {/* <Filterwork categories={categories} /> */}
    <nav>
      <Link to="/about"><button>Info</button></Link>
    </nav>
  </header>








export default Header;