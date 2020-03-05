import React from 'react';
import Weather from '../Weather';
import {
  Link
} from 'react-router-dom';

const Header = ({ toggleShowDetails, weather, }) =>
  <header>
    <nav>
      <Link to='/' className='headerlink'>
        <h2 onClick={() => toggleShowDetails(null)}>
          Kristoffer Larberg
        </h2>
      </Link>
    </nav>
    <nav>
      <Weather weather={weather} />
    </nav>
  </header>

export default Header;