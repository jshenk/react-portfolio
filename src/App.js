import React from 'react';
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

function App() {

  return (
  <div className="App">

    <div className="stage">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/work">
            <MyWork/>
          </Route>
          <Route path="/me">
            <AboutMe/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Redirect to="/react-portfolio" />
        </Switch>
      </BrowserRouter>

    </div>
  </div>
  );
}

export default App;
