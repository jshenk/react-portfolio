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
          <Route path="/react-portfolio" exact>
            <Home/>
          </Route>
          <Route path="/react-portfolio/work" exact>
            <MyWork/>
          </Route>
          <Route path="/react-portfolio/me" exact>
            <AboutMe/>
          </Route>
          <Route path="/react-portfolio/contact" exact>
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
