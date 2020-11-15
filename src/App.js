import React, { useState } from 'react';
import './App.css';
import './tailwind.generated.css';
import MyWork from './compontants/MyWork';
import AboutMe from './compontants/AboutMe';
import Contact from './compontants/Cotact';
import Home from './compontants/Home';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom'
import IconChevronCircle from './icons/IconChevronCircle';


function App() {

  return (
  <div className="App">

    <div className="stage">
      <BrowserRouter>
        <Switch>
          <Route path="/React-Portfolio" exact>
            <Home/>
          </Route>
          <Route path="/work" exact>
            <MyWork/>
          </Route>
          <Route path="/me" exact>
            <AboutMe/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
          <Redirect path="/React-Portfolio" />
        </Switch>
      </BrowserRouter>

    </div>
  </div>
  );
}

export default App;
