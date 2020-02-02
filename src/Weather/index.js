import React from 'react';

const Weather = ({ weather, condition }) => {

  const Condition = condition;
  const weatherColours = [
    [281.86, 281.86, 'broken clouds'],
    [281.86, 281.86, 'clouds'],
    [281.86, 281.86, 'clouds'],
    [281.86, 281.86, 'clear sky'],
    [281.86, 281.86, 'mist'],
    [281.86, 281.86, 'snow'],
    [281.86, 281.86, 'heavy rain'],
    [281.86, 281.86, 'rain'],
    [281.86, 281.86, 'rain'],
    [281.86, 281.86, 'drizzle'],
    [281.86, 281.86, 'thunder']
  ];

  let output = '';

  weatherColours.forEach(function (el) {
    if (condition >= el[0] && condition <= el[1]) output = el[2]
  });

  return <p>{output ? output : 'error'}</p>
}
export default Weather;