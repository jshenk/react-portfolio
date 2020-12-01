import {
  NavLink,
} from "react-router-dom"
import React from 'react'

function Menu (props) {

  return (
    <div className="flex flex-wrap md:flex-no-wrap justify-center md:justify-end md:pr-10 w-full">
      <NavLink to="/" className="uppercase pr-6" activeClassName="font-medium"><span className="menu-link-hover">Home</span></NavLink>
      <NavLink to="/work" className="uppercase pr-6" activeClassName="font-medium"><span className="menu-link-hover">Experience</span> </NavLink>
      <NavLink to="/me" className="uppercase md:pr-6" activeClassName="font-medium"><span className="menu-link-hover">Background</span></NavLink>
      <NavLink to="/contact" className="bg-yellow-500 px-2 uppercase md:bg-transparent md:px-0" activeClassName="font-medium"><span className="menu-link-hover">Contact</span> </NavLink> 
    </div>
  )
}

export default Menu;