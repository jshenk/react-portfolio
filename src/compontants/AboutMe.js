import React, { useState, useRef } from 'react';
import IconDegree from '../icons/IconDegree';
import IconGithub from '../icons/IconGithub';
import IconLinkedin from '../icons/IconLinkedin';
import IconSchool from '../icons/IconSchool';
import IconTwitter from '../icons/IconTwitter';
import BioImage from '../images/bio.JPG'

function AboutMe () {
  return (
    <div>
      <div className="bg-teal-400 h-about-lead w-11/12 mt-10"></div>
      <div className="container mx-auto -mt-64 flex">
        <div className="w-1/2 text-left pr-12">
        <span className="bg-teal-100 p-1 text-2xl uppercase" >Ten Minutes With</span>
        <h1 className="font-black leading-none text-left uppercase mb-10 text-title-inner">Jenna<br/>Shenk<span className="bg-yellow-500 h-5 w-5 inline-block rounded-full"></span></h1>
        <p className="mb-5">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="w-1/2 text-right">
          <img src={BioImage} alt="bio" className="ml-auto" />
          <div className="pt-10">
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
        </div>
      </div>
      <div className="container mx-auto text-left my-10">
        <div className="text-left text-lg flex">
        <div className="w-1/3 mb-10">
          <h2 className="text-xl font-bold mb-5 text-gray-900" >Education</h2>
          <div><IconSchool height="25px" width="25px" className="inline mr-3" />Stevenson University</div>
          <div><IconDegree height="25px" width="25px" className="inline mr-3" />Business Information Systems <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">'16</span></div>
        </div>
        <div className="w-1/3 mb-10">
          <h2 className="text-xl font-bold mb-5 text-gray-900" >Learning</h2>
          <ul className="list-disc list-inside">
            <li>React Workshop - Fundimenals to Advanced</li>
            <li>Betamore Frontend Development</li>
          </ul>
        </div>
        <div className="w-1/3 mb-10">
          <h2 className="text-xl font-bold mb-5 text-gray-900" >Pro Bono Web Work</h2>
          <ul className="list-disc list-inside">
            <li>Women's Law Center of Maryland</li>
            <li> Volunteering Untapped</li>
          </ul>
        </div>
      
        </div>
        <div className="flex text-2xl">
        <div className="w-1/2 mb-10 py-10">
        <h2 className="text-xl font-bold mb-5 text-gray-900" >Writing</h2>
          <ul>
            <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/twig-tricks-you-need-know">Twig Tricks You Need To Know</a></li>
            <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/layout-builder-in-drupal-8">How to use Layout Builder in Drupal 8</a></li>
            <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/generating-image-urls-drupal">Generating Image URLs in Drupal</a></li>
            <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/ditch-your-homepage-slideshow">Ditch Your Homepage Slideshow</a></li>
            <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/drupal-8-responsive-image-module">Drupal 8 Responsive Image Module</a></li>
          </ul>

        </div>
        <div className="bg-yellow-200 p-10 w-1/2 mb-10">
        <h2 className="text-xl font-bold mb-5 text-gray-900" >Speaking</h2>
          <ul className="">
            <div className="font-semibold text-gray-700">Drupalcon Global <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">'20</span></div>
            <a className="hover:underline mb-5 block" href="https://events.drupal.org/global2020/sessions/visual-editing-experience-gutenberg-editor-vs-layout-builder">The Visual Editing Experience: Gutenberg Editor vs. Layout Builder</a>
            <div className="font-semibold text-gray-700">Baltimore Drupal Camp <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">'19</span></div>
            <a className="hover:underline mb-5 block" href="https://www.videodrupal.org/video/20191023/gutenberg-editor-vs-layout-builder-drupal-8-jenna-shenk">Building Flexible Websites</a>
          </ul>
        </div>
        </div>
        <h2 className="font-bold text-4xl text-center">Work Experience</h2>
        <h3 className="font-bold text-gray-900 text-xl uppercase">Unleashed Technologies</h3>
        <div className="text-gray-600 mb-4">2016 - Current</div>
        <div className="grid grid-cols-3 gap-10 text-lg mb-10">
          <div>
          <span className="font-medium">Mid-Level Developer</span>
          <ul className="list-disc list-inside">
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
          </ul>
          </div>
          <div>
          <span className="font-medium">Junior Developer</span>
          <ul className="list-disc list-inside">
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
          </ul>
          </div>
          <div>
          <span className="font-medium">Intern</span>
          <ul className="list-disc list-inside">
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
          </ul>
          </div>
        </div>
        <h3 className="font-bold text-gray-900 text-xl uppercase">WebMechanix</h3>
        <div className="text-gray-600 mb-4">2016</div>
        <div className="text-lg">
        <span>Intern</span>
          <ul className="list-disc list-inside">
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
            <li>Blog article</li>
          </ul>

        </div>
      </div>

    </div>
  );

}
export default AboutMe;