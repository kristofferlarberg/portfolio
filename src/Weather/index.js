import React from 'react';
import {
  Link
} from "react-router-dom";

const Weather = (props) => {

  const weather = props.weather;
  /*   const weatherColours = [
      [-10, -1, 'broken clouds'],
      [-1, 10, 'clouds'],
      [10, 20, 'clouds'],
      [20, 30, 'clear sky'],
  
    ];
  
    let output = ''; */

  /*  weatherColours.forEach(function (el) {
     if (weather >= el[0] && weather <= el[1]) output = el[2]
   }); 
 
 
 return <p>{output ? output : 'error'}</p>
 
  */


  if (weather >= -20 && weather <= -15) {
    return <Link to="/about"><button class="one">Info</button></Link>
  }
  else if (weather >= -15 && weather <= -10) {
    return <Link to="/about"><button class="two">Info</button></Link>
  }
  else if (weather >= -10 && weather <= -5) {
    return <Link to="/about"><button class="three">Info</button></Link>
  }
  else if (weather >= -5 && weather <= 0) {
    return <Link to="/about"><button class="four">Info</button></Link>
  }
  else if (weather >= 0 && weather <= 5) {
    return <Link to="/about"><button class="five">Info</button></Link>
  }
  else if (weather >= 5 && weather <= 10) {
    return <Link to="/about"><button class="six">Info</button></Link>
  }
  else if (weather >= 10 && weather <= 15) {
    return <Link to="/about"><button class="seven">Info</button></Link>
  }
  else if (weather >= 15 && weather <= 20) {
    return <Link to="/about"><button class="eight">Info</button></Link>
  }
  else if (weather >= 20 && weather <= 25) {
    return <Link to="/about"><button class="nine">Info</button></Link>
  }
  else if (weather >= 25 && weather <= 30) {
    return <Link to="/about"><button class="ten">Info</button></Link>
  }
  else if (weather >= 30 && weather <= 35) {
    return <Link to="/about"><button class="eleven">Info</button></Link>
  }
  else {
    return <Link to="/about"><button class="twelve">Info</button></Link>
  }

}

export default Weather;