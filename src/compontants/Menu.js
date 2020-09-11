import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import React, { useState, useRef } from 'react'

function Menu () {

  return (
    <div className="flyout-menu">
      <Link to="/" >Home</Link>
      <Link to="/work" >My Work</Link>
      <Link to="/me" >About Me</Link>
      <Link to="contact" >Contact</Link> 


      <div className="flex">
        <a href="https://github.com/jshenk" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Github
        </a>
        <a href="https://www.linkedin.com/in/jennashenk/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Linkedin
        </a>
        <a href="https://twitter.com/jshenk5" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Twitter
        </a>
      </div>
      <div className="flex">
        <a href="mailto:jslynne@gmail.com">Email</a>
        <p>Baltimore, MD</p>
      </div>

    </div>
  )
}

export default Menu;