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
  BrowserRouter
} from 'react-router-dom'

function App() {

  return (
  <div className="App">

    <div className="stage">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={MyWork} />
          <Route path="/me" component={AboutMe} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>

    </div>
  </div>
  );
}

export default App;
