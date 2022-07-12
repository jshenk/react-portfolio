import { NavLink } from "react-router-dom";
import React from "react";
import Logo from "./Logo";
import IconHamburger from "../icons/IconHamburger";
import IconClose from "../icons/IconClose";

function Menu(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800 relative flex flex-wrap items-center justify-between lg:px-2 lg:py-3 navbar-expand-lg lg:mb-3 w-full">
      <div className="container lg:px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex flex-wrap md:flex-no-wrap justify-center md:justify-end md:pr-10 items-center">
            <Logo />
          </div>
          <button
            className="text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <IconClose stroke="#fff" />
            ) : (
              <IconHamburger stroke="#fff" />
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center text-white" +
            (navbarOpen ? " flex flex-wrap" : " hidden")
          }
          id="example-navbar-danger"
        >
          <NavLink
            to="/work"
            className="uppercase lg:pr-6 w-full lg:w-auto"
            activeClassName="font-medium"
          >
            <span className="menu-link-hover">Portfolio</span>
          </NavLink>
          <NavLink
            to="/contact"
            className="uppercase w-full lg:w-auto"
            activeClassName="font-medium"
          >
            <span className="menu-link-hover">Contact</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
