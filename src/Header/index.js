import React, { Component } from 'react';
import Filterwork from '../Filterwork';
import Post from '../Post';
import About from '../About';
import Previews from '../Previews';
import {
  Link
} from "react-router-dom";


const Header = ({ categories, info }) =>
  <header>
    <nav>
      <Link to="/">Kristoffer Larberg</Link>
    </nav>
    {/* <Filterwork categories={categories} /> */}
    <nav>
      <Link to="/about"><div class='button'>Info</div></Link>
    </nav>
  </header>








export default Header;