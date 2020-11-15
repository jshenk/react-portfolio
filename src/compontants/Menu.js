import {
  NavLink,
} from "react-router-dom"
import React from 'react'

function Menu (props) {

  return (
    <div className="flex justify-end pr-10 w-full">
      <NavLink to="/React-Portfolio" className="uppercase pr-6" activeClassName="font-medium"><span className="menu-link-hover">Home</span></NavLink>
      <NavLink to="/work" className="uppercase pr-6" activeClassName="font-medium"><span className="menu-link-hover">Experience</span> </NavLink>
      <NavLink to="/me" className="uppercase pr-6" activeClassName="font-medium"><span className="menu-link-hover">Background</span></NavLink>
      <NavLink to="/contact" className="uppercase" activeClassName="font-medium"><span className="menu-link-hover">Contact</span> </NavLink> 
    </div>
  )
}

export default Menu;