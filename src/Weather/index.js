import React from 'react';

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


  if (weather >= -10 && weather <= -1) {
    return <div className='dot1'></div>
  }
  else if (weather >= -1 && weather <= 10) {
    return <div className='dot2'></div>
  }
  else if (weather >= 10 && weather <= 20) {
    return <div className='dot3'></div>
  }
  else if (weather >= 20 && weather <= 30) {
    return <div className='dot4'></div>
  }
  else {
    return <div className='dot4'></div>
  }

}

export default Weather;