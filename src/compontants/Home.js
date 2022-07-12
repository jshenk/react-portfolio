import React from "react";
import BioImage from "../images/bio.JPG";
import IconGithub from "../icons/IconGithub";
import IconLinkedin from "../icons/IconLinkedin";
import IconTwitter from "../icons/IconTwitter";
import IconMail from "../icons/IconMail";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="lg:flex relative p-6 lg:p-0 bg-gray-800 lg:bg-transparent">
      <div className="bg-gray-800 lg:flex lg:h-screen lg:w-1/3 items-start">
        <div className="lg:top-0 lg:right-0 lg:mb-6 lg:p-6 text-white flex items-center">
          <Menu />
        </div>
      </div>
      <div className="flex flex-wrap lg:h-screen items-center w-full lg:w-2/3 mb-6 lg:mb-0"></div>
      <div className="flex flex-wrap items-center bg-white shadow-lg lg:absolute bio-card position-center rounded container max-w-screen-lg mx-auto">
        <img
          className="w-full lg:w-1/2  rounded-t lg:rounded-l"
          src={BioImage}
          alt="bio"
        />
        <div className="lg:text-left lg:w-1/2 p-6 lg:p-12 w-full">
          <h1 className="font-black text-gray-800 leading-none text-6xl">
            Hello.
          </h1>
          <h2 className="text-2xl mb-4">I'm Jenna Shenk</h2>
          <span>Frontend Engineer</span>
          <span className="block h-3 w-3 lg:inline-block bg-yellow-500 rounded-full mx-auto lg:mx-3"></span>
          <span>Baltimore, MD</span>
          <div className="pt-10">
            <a href="https://github.com/jshenk" className="pr-4">
              <IconGithub
                height="25px"
                width="25px"
                className="inline"
                fill="#2d3748"
              />
            </a>
            <a href="https://www.linkedin.com/in/jennashenk/" className="pr-4">
              <IconLinkedin
                height="25px"
                width="25px"
                className="inline"
                fill="#2d3748"
              />
            </a>
            <a href="https://twitter.com/jshenk5" className="pr-4">
              <IconTwitter
                height="25px"
                width="25px"
                className="inline"
                fill="#2d3748"
              />
            </a>
            <Link to="/contact" className="pr-4">
              <IconMail
                height="25px"
                width="25px"
                className="inline"
                fill="#2d3748"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
