import React, { useState, useRef } from 'react';
import IconDegree from '../icons/IconDegree';
import IconGithub from '../icons/IconGithub';
import IconLinkedin from '../icons/IconLinkedin';
import IconSchool from '../icons/IconSchool';
import IconTwitter from '../icons/IconTwitter';
import BioImage from '../images/bio.JPG'
import Menu from './Menu';

function AboutMe () {
  return (
    <div>
      <div className="pt-10 pr-10">
        <Menu />
      </div>
      <div className="container mx-auto text-left mt-10">
        <h1 className="mb-4 text-gray-800 text-6xl">Background</h1>
        <div className="text-left text-lg flex">
        <div className="w-1/3 mb-10">
          <h2 className="text-xl font-bold mb-5 text-gray-900" >Education</h2>
          <div><IconSchool height="25px" width="25px" className="inline mr-3" />Stevenson University</div>
          <div><IconDegree height="25px" width="25px" className="inline mr-3" />Business Information Systems <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">'16</span></div>
        </div>
        <div className="w-1/3 mb-10">
          <h2 className="text-xl font-bold mb-5 text-gray-900" >Learning</h2>
          <ul className="list-disc ml-6">
            <li>React Workshop - Fundimenals to Advanced</li>
            <li>Betamore Frontend Development</li>
          </ul>
        </div>
        <div className="w-1/3 mb-10">
          <h2 className="text-xl font-bold mb-5 text-gray-900" >Pro Bono Web Work</h2>
          <ul className="list-disc ml-6">
            <li>Women's Law Center of Maryland</li>
            <li> Volunteering Untapped</li>
          </ul>
        </div>
      
        </div>
        <div className="grid gap-8 grid-cols-2 mb-10">
          <div className="bg-gray-200 p-5">
          <h2 className="text-gray-700 text-lg uppercase mb-2">Writing</h2>
            <ul className="list-disc ml-6">
              <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/twig-tricks-you-need-know">Twig Tricks You Need To Know</a></li>
              <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/layout-builder-in-drupal-8">How to use Layout Builder in Drupal 8</a></li>
              <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/generating-image-urls-drupal">Generating Image URLs in Drupal</a></li>
              <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/ditch-your-homepage-slideshow">Ditch Your Homepage Slideshow</a></li>
              <li><a className="hover:underline" href="https://www.unleashed-technologies.com/blog/drupal-8-responsive-image-module">Drupal 8 Responsive Image Module</a></li>
            </ul>
          </div>
          <div className="bg-gray-200 p-5">
          <h2 className="text-gray-700 text-lg uppercase mb-2">Speaking</h2>
            <ul className="">
              <div className="font-semibold text-gray-800 text-xl">Drupalcon Global <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">'20</span></div>
              <a className="hover:underline mb-5 block" href="https://events.drupal.org/global2020/sessions/visual-editing-experience-gutenberg-editor-vs-layout-builder">The Visual Editing Experience: Gutenberg Editor vs. Layout Builder</a>
              <div className="font-semibold text-gray-800 text-xl">Baltimore Drupal Camp <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">'19</span></div>
              <a className="hover:underline mb-5 block" href="https://www.videodrupal.org/video/20191023/gutenberg-editor-vs-layout-builder-drupal-8-jenna-shenk">Building Flexible Websites</a>
            </ul>
          </div>
        </div>
      </div>
      <div className="pb-10">
      <div className="container mx-auto text-gray-800 text-left">
        <div className="row">
          <h3 className="font-bold text-3xl text-gray-900 uppercase">Unleashed Technologies</h3>
          <div className="text-gray-600 mb-4">2016 - Current</div>
            <div span className="font-medium">Mid-Level Developer <span className="text-gray-600 mb-4 font-normal">2018 - Present</span></div>
            <div className="font-medium">Junior Developer <span className="text-gray-600 mb-4 font-normal">2017 - 2018</span> </div>
            <div className="font-medium mb-5">Intern <span className="text-gray-600 mb-4 font-normal">2016 - 2017</span></div>
              <ul className="gap-x-10 grid grid-cols-2 list-disc ml-6 text-lg">
                <li>Lead monthly, company-wide, frontend presentations to cover new topics in frontend tech, and educate on company frontend standards.</li>
                <li>Oversaw frontend standards for the entire tech company, by providing code reviews and consulting on new builds as to what tech stack to use.</li>
                <li>Built a headless Drupal 8 site, with a React frontend. Project provided an interactive risk assesemnt cube for at-risk individuals who are navigating drug court.</li>
                <li>Work with a team of developers to create an ecommerce application for creating and distributing team apparel. Apoplication used a React frontend, with a Symfony backend.</li>
                <li>Lead developer for two Drupal 8 builds, managing a team of developers, third party integration partners, and performing code reviews.</li>
                <li>Developed frontend themes for four Wordpress sites.</li>
                <li>Blog articleMigrated numerous Drupal 7 sites to Drupal 8, maintaining the site's functionality while revamping the design for better user experience.Blog article</li>
                <li>Led weekly status calls with clients pertaining to website strategy and project status.Performed module and security updates for Drupal 6, 7, and 8 websites.</li>
                <li>Facilitated website training for our clients, accompanied with custom documentation websites.</li>
                <li>Created custom PHP modules and theme functions for Drupal 6, 7 and 8.</li>
                <li>Reviewed design compositions for project builds in order to give developer feedback prior to final client approval.</li>
                <li>Created and tracked key performance indicators for each client.</li>
              </ul>
          <h3 className="font-bold mt-10 text-3xl text-gray-900 uppercase">WebMechanix</h3>
          <div className="text-gray-600 mb-4">2016</div>
          <div className="font-medium mb-5">Intern <span className="text-gray-600 mb-4 font-normal">2016</span> </div>
          <ul className="list-disc ml-6 text-lg">
              <li>Created custom responsive HTML email templates for marketing campaigns.</li>
              <li>Completed UX analysis of client websites to deliver reports on design changes.</li>
              <li>Utilized tools such as Google Analytics, Google Tag Manager, Hotjar, Hubspot, and Optimizly to analyze site trends and test design changes.</li>
            </ul>
        </div>
      </div>
      </div>


    </div>
  );

}
export default AboutMe;