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
    <div className="md:flex relative p-6 lg:p-0 bg-gray-800 lg:bg-transparent">
      <div className="bg-gray-800 md:flex md:h-screen items-center w-1/3 hidden">
      </div>
      <div className="flex flex-wrap md:h-screen items-center w-full md:w-2/3 mb-6 md:mb-0">
        <div class="md:absolute md:top-0 md:right-0 mb-6 md:p-6 text-white lg:text-black">
        <Menu />
        </div>
      </div>
      <div className="flex flex-wrap items-center bg-white shadow-lg md:absolute bio-card position-center rounded container max-w-screen-lg mx-auto">
        <img className="w-full md:w-1/2  rounded-t md:rounded-l" src={BioImage} alt="bio"/>
        <div className="md:text-left md:w-1/2 p-6 lg:p-12 w-full">
            <h1 className="font-black text-gray-800 leading-none text-6xl">Hello.</h1>
            <h2 className="text-2xl mb-4">I'm Jenna Shenk</h2>
            <span>Frontend Web Developer</span><span className="block h-3 w-3 md:inline-block bg-yellow-500 rounded-full mx-auto md:mx-3"></span><span>Baltimore, MD</span>
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
              <Link to="/react-portfolio/contact" className="pr-4">
                <IconMail height="25px" width="25px" className="inline" fill="#2d3748"/>
              </Link> 
            </div>
        </div>
     </div>
    </div>
    
  );
}
export default Home;