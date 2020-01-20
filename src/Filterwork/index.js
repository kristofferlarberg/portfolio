import React, { Component } from 'react';

const Filterwork = ({ categories }) =>
  <nav>
    {categories.map(function (item) {
      return <div class='button'>{item.name}</div>;
    })}
  </nav>

export default Filterwork;