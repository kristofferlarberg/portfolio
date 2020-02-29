import React from 'react';
import Weather from '../Weather';
import {
  Link
} from 'react-router-dom';

const Header = ({ toggleShowDetails, weather, }) =>
  <header>
    <nav>
      <Link to='/' className='headerlink'><h2 onClick={() => toggleShowDetails(null)}>Kristoffer Larberg</h2></Link>
    </nav>
    <nav>
      <h2>*This portfolio awaits its content, meanwhile it offers some off-hour fragments*</h2>
    </nav>
    <nav>
      <Weather weather={weather} />
    </nav>
  </header>

export default Header;