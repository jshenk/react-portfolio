import React, { useState } from 'react';
import './App.css';
import './tailwind.generated.css';
import MyWork from './compontants/MyWork';
import AboutMe from './compontants/AboutMe';
import Contact from './compontants/Cotact';
import Home from './compontants/Home';
import Menu from './compontants/Menu'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom'


function App() {
  const [toggle, setToggle] = useState(false)
  const [menuText, setMenuText] = useState(false)

  return (
  <div className="App">

    <div className="stage">
      <BrowserRouter>
        {toggle && <Menu /> }
        <button onClick={() => {
          setToggle(!toggle)
          setMenuText(!menuText)
        }} >{menuText ? 'Close Menu' : 'Open Menu'}</button>
        <Switch>
          <Route path="/React-Portfolio" exact>
            <Home/>
          </Route>
          <Route path="/React-Portfolio/work" exact>
            <MyWork/>
          </Route>
          <Route path="/React-Portfolio/me" exact>
            <AboutMe/>
          </Route>
          <Route path="/React-Portfolio/contact" exact>
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
