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
      <BrowserRouter basename="/react-portfolio">
        <Switch>
          <Route path="/react-portfolio" exact>
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
          <Redirect path="/react-portfolio" />
        </Switch>
      </BrowserRouter>

    </div>
  </div>
  );
}

export default App;
