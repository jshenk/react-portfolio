import {
  Link,
} from "react-router-dom"
import React from 'react'
import IconGithub from "../icons/IconGithub"
import IconLinkedin from "../icons/IconLinkedin"
import IconTwitter from "../icons/IconTwitter"
import IconMail from "../icons/IconMail"

function Menu () {

  return (
    <div className="flyout-menu">
      <div className="flex bg-yellow-300 px-10 py-5 text-lg">
        <div className="w-1/2 text-left">
          <a href="https://github.com/jshenk" className="pr-4">
          <IconGithub height="25px" width="25px" className="inline" />
          </a>
          <a href="https://www.linkedin.com/in/jennashenk/" className="pr-4">
          <IconLinkedin height="25px" width="25px" className="inline" />
          </a>
          <a href="https://twitter.com/jshenk5" className="pr-4">
          <IconTwitter height="25px" width="25px" className="inline"  />
          </a>
        </div>
        <div className="w-1/2 text-right">
          <a href="mailto:jslynne@gmail.com" className="pr-4"><IconMail height="25px" width="25px" className="inline"  /></a>
          <span>Baltimore, MD</span>
        </div>
      </div>
      <div className="py-3">
      <Link to="/React-Portfolio" className="block font-bold text-4xl"><span className="menu-link-hover">Home</span></Link>
      <Link to="/React-Portfolio/work" className="block font-bold text-4xl"><span className="menu-link-hover">My Work</span> </Link>
      <Link to="/React-Portfolio/me" className="block font-bold text-4xl"><span className="menu-link-hover"> About Me</span></Link>
      <Link to="/React-Portfolio/contact" className="block font-bold text-4xl"><span className="menu-link-hover">Contact</span> </Link> 
      </div>

    </div>
  )
}

export default Menu;