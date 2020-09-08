import React, { useState, useRef } from 'react';
import './App.css';
import './tailwind.generated.css';
import Header from "./compontants/Header";
import MyWork from './compontants/MyWork';
import AboutMe from './compontants/AboutMe';
import Contact from './compontants/Cotact';
import Home from './compontants/Home';

function App(props) {

  return (
  <div className="App">

    <div className="stage">
      <Home class="active"/>

    </div>
  </div>
  );
}

export default App;
