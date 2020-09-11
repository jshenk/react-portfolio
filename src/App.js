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
  Link,
  Redirect,
  useRouteMatch,
  useParams, BrowserRouter
} from 'react-router-dom'


function App(props) {
  const [toggle, setToggle] = useState(false)

  return (
  <div className="App">

    <div className="stage">
      <BrowserRouter>
        {toggle && <Menu /> }
        <button onClick={() => {
          setToggle(!toggle)
        }} >Open Menu</button>
        <Switch>
          <Route path="/" exact>
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
          <Redirect path="/" />
        </Switch>
      </BrowserRouter>

    </div>
  </div>
  );
}

export default App;
