import { NavLink } from "react-router-dom";
import React from "react";

function Menu(props) {
  return (
    <div className="flex flex-wrap md:flex-no-wrap justify-center md:justify-end md:pr-10">
      <NavLink
        to="/work"
        className="uppercase pr-6"
        activeClassName="font-medium"
      >
        <span className="menu-link-hover">Portfolio</span>
      </NavLink>
      <NavLink
        to="/me"
        className="uppercase md:pr-6"
        activeClassName="font-medium"
      >
        <span className="menu-link-hover">Resume</span>
      </NavLink>
      <NavLink
        to="/blog"
        className="uppercase md:pr-6"
        activeClassName="font-medium"
      >
        <span className="menu-link-hover">Blog</span>
      </NavLink>
      <NavLink
        to="/contact"
        className="bg-yellow-500 px-2 uppercase md:bg-transparent md:px-0"
        activeClassName="font-medium"
      >
        <span className="menu-link-hover">Contact</span>
      </NavLink>
    </div>
  );
}

export default Menu;
