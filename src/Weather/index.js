import React from 'react';
import {
  Link
} from 'react-router-dom';

const Weather = (props) => {
  const weather = props.weather;
  if (weather >= -20 && weather <= -15) {
    return <Link to='/about' className='buttonlink'><button className='one'>Info</button></Link>
  }
  else if (weather >= -15 && weather <= -10) {
    return <Link to='/about' className='buttonlink'><button className='two'>Info</button></Link>
  }
  else if (weather >= -10 && weather <= -5) {
    return <Link to='/about' className='buttonlink'><button className='three'>Info</button></Link>
  }
  else if (weather >= -5 && weather <= 0) {
    return <Link to='/about' className='buttonlink'><button className='four'>Info</button></Link>
  }
  else if (weather >= 0 && weather <= 5) {
    return <Link to='/about' className='buttonlink'><button class='five'>Info</button></Link>
  }
  else if (weather >= 5 && weather <= 10) {
    return <Link to='/about' className='buttonlink'><button className='six'>Info</button></Link>
  }
  else if (weather >= 10 && weather <= 15) {
    return <Link to='/about' className='buttonlink'><button className='seven'>Info</button></Link>
  }
  else if (weather >= 15 && weather <= 20) {
    return <Link to='/about' className='buttonlink'><button className='eight'>Info</button></Link>
  }
  else if (weather >= 20 && weather <= 25) {
    return <Link to='/about' className='buttonlink'><button className='nine'>Info</button></Link>
  }
  else if (weather >= 25 && weather <= 30) {
    return <Link to='/about' className='buttonlink'><button className='ten'>Info</button></Link>
  }
  else if (weather >= 30 && weather <= 35) {
    return <Link to='/about' className='buttonlink'><button className='eleven'>Info</button></Link>
  }
  else {
    return <Link to='/about' className='buttonlink'><button className='twelve'>Info</button></Link>
  }
}

export default Weather;