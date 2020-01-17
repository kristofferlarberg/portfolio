import React, { Component } from 'react';

const Filterwork = (props) =>
  <main>
      {props.categories.map(function (item) {
        return <div class='button'>{item.name}</div>;
      })}

  </main>




export default Filterwork;