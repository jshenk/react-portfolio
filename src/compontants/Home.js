import React from 'react';
import BioImage from '../images/bio.JPG'
import IconGithub from '../icons/IconGithub';
import IconLinkedin from '../icons/IconLinkedin';
import IconTwitter from '../icons/IconTwitter';
import IconMail from '../icons/IconMail';
import Menu from './Menu';
import { Link } from 'react-router-dom';

function Home () {
  return (
    <div className="flex">
      <div className="bg-gray-800 flex h-screen items-center w-1/2">
        <img src={BioImage} alt="bio" className="ml-auto -mr-16" />
      </div>
      <div className="flex flex-wrap h-screen items-center w-1/2">
        <div class="absolute top-0 right-0 pt-10 pr-10">
        <Menu />
        </div>
        <div className="text-left text-gray-900 ml-24">
          <h1 className="font-black text-gray-800 leading-none text-6xl">Hello.</h1>
          <h2 className="text-2xl mb-4">I'm Jenna Shenk</h2>
          <span>Frontend Web Developer</span><span className="h-3 w-3 inline-block bg-yellow-500 rounded-full mx-3"></span><span>Baltimore, MD</span>
          <div className="">
          <div className="pt-10">
            <a href="https://github.com/jshenk" className="pr-4">
            <IconGithub height="25px" width="25px" className="inline" fill="#2d3748"/>
            </a>
            <a href="https://www.linkedin.com/in/jennashenk/" className="pr-4">
            <IconLinkedin height="25px" width="25px" className="inline" fill="#2d3748"/>
            </a>
            <a href="https://twitter.com/jshenk5" className="pr-4">
            <IconTwitter height="25px" width="25px" className="inline" fill="#2d3748"/>
            </a>   
            <Link to="/React-Portfolio/contact" className="pr-4">
              <IconMail height="25px" width="25px" className="inline" fill="#2d3748"/>
            </Link> 
          </div>
        </div>
        </div>
      </div>

    </div>
  );
}
export default Home;