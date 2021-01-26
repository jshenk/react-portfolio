import React from "react";
import IconDegree from "../icons/IconDegree";
import IconSchool from "../icons/IconSchool";
import Banner from "./Banner";
import Logo from "./Logo";
import Menu from "./Menu";

function AboutMe() {
  return (
    <div>
      <div className="md:p-6 md:bg-gray-800 md:text-white flex items-center">
        <Logo />
        <Menu />
      </div>
      <Banner title={"Resume"} />
      <div className="container mx-auto text-left mt-20 p-6 lg:p-0">
        <div className="text-left text-lg grid lg:grid-cols-3">
          <div className="mb-20">
            <h2 className="text-xl font-bold mb-5 text-gray-900">Education</h2>
            <div>
              <IconSchool height="25px" width="25px" className="inline mr-3" />
              Stevenson University
            </div>
            <div>
              <IconDegree height="25px" width="25px" className="inline mr-3" />
              Business Information Systems{" "}
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">
                '16
              </span>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-xl font-bold mb-5 text-gray-900">Learning</h2>
            <ul className="list-disc ml-6">
              <li>React Workshop - Fundimenals to Advanced</li>
              <li>Betamore Frontend Development</li>
            </ul>
          </div>
          <div className="mb-20">
            <h2 className="text-xl font-bold mb-5 text-gray-900">
              Certifications
            </h2>
            <ul className="list-disc ml-6">
              <li>Acquia Certified Frontend Specialist</li>
              <li>Acquia Certified Site Builder</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <div className="bg-gray-200 p-5 shadow-md">
            <h2 className="text-gray-700 text-lg uppercase mb-2">Writing</h2>
            <ul className="list-disc ml-6">
              <li>
                <a
                  className="hover:underline"
                  href="https://www.unleashed-technologies.com/blog/twig-tricks-you-need-know"
                >
                  Twig Tricks You Need To Know
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.unleashed-technologies.com/blog/layout-builder-in-drupal-8"
                >
                  How to use Layout Builder in Drupal 8
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.unleashed-technologies.com/blog/generating-image-urls-drupal"
                >
                  Generating Image URLs in Drupal
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.unleashed-technologies.com/blog/ditch-your-homepage-slideshow"
                >
                  Ditch Your Homepage Slideshow
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="https://www.unleashed-technologies.com/blog/drupal-8-responsive-image-module"
                >
                  Drupal 8 Responsive Image Module
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-200 p-5 shadow-md">
            <h2 className="text-gray-700 text-lg uppercase mb-2">Speaking</h2>
            <ul className="">
              <div className="font-semibold text-gray-800 text-xl">
                Drupalcon Global{" "}
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">
                  '20
                </span>
              </div>
              <a
                className="hover:underline mb-5 block"
                href="https://events.drupal.org/global2020/sessions/visual-editing-experience-gutenberg-editor-vs-layout-builder"
              >
                The Visual Editing Experience: Gutenberg Editor vs. Layout
                Builder
              </a>
              <div className="font-semibold text-gray-800 text-xl">
                Baltimore Drupal Camp{" "}
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">
                  '19
                </span>
              </div>
              <a
                className="hover:underline mb-5 block"
                href="https://www.videodrupal.org/video/20191023/gutenberg-editor-vs-layout-builder-drupal-8-jenna-shenk"
              >
                Building Flexible Websites
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="pb-10 px-6 lg:px-0">
        <div className="container mx-auto text-gray-800 text-left">
          <div className="row">
            <h3 className="font-bold text-3xl text-gray-900 uppercase">
              Unleashed Technologies
            </h3>
            <div className="text-gray-600 mb-4">2016 - Current</div>
            <div span className="font-medium">
              Mid-Level Developer{" "}
              <span className="text-gray-600 mb-4 font-normal">
                2018 - Present
              </span>
            </div>
            <div className="font-medium">
              Junior Developer{" "}
              <span className="text-gray-600 mb-4 font-normal">
                2017 - 2018
              </span>{" "}
            </div>
            <div className="font-medium mb-5">
              Intern{" "}
              <span className="text-gray-600 mb-4 font-normal">
                2016 - 2017
              </span>
            </div>
            <ul className="gap-x-10 grid md:grid-cols-2 list-disc ml-6 text-lg">
              <li>
                Built 10+ Drupal 8 websites, working in both the frontend and
                backend. Development included integrations, custom modules,
                custom frontend themes, and custom content management systems.{" "}
              </li>
              <li>
                Built a Drupal website with a headless React frontend, using
                JSON API and RESTful Web Services to connect the data. Developed
                a custom JSON API Drupal module, which rewrote the standard
                Drupal menu system to integrate with React.{" "}
              </li>
              <li>
                Built Lab Tests Online (https://labtestsonline.org/) as a fully
                translatable Drupal 8 website. The site is currently translated
                to over 10 different languages.{" "}
              </li>
              <li>
                Added Drupal translation coding standards to all Drupal 8
                builds, to allow for translatable content in any website we
                produce.{" "}
              </li>
              <li>
                Enforced codes standards, module upgrades and patches, and
                website enhancements for anywhere from 5 - 15 Drupal websites
                each month.{" "}
              </li>
              <li>
                Experience developing in LAMP and LEMP stack environments, both
                in local development and production servers.{" "}
              </li>
              <li>
                Built 3 Wordpress websites, with custom themes and backend
                integrations.
              </li>
              <li>
                Developed a PWA for Drupal 8 website using the Progressive Web
                App module. Added custom features to ensure iPhone users could
                access the PWA as well.
              </li>
              <li>
                Developed custom Drupal modules to extend and enhance Drupal
                websites. Modules pertained to both frontend theming as well as
                backend integrations.
              </li>
              <li>
                Written patches for existing Drupal modules, which were
                submitted and verified by the Drupal community.{" "}
              </li>
              <li>
                Experience working with integrations and Drupal modules written
                in PHP, Twig, and Symfony.{" "}
              </li>
              <li>
                Created a custom frontend Drupal theme, that was then reused for
                two Drupal 8 builds. This theme leveraged Bootstrap and Sass to
                allow for the colors and design to be tailored for each site.{" "}
              </li>
              <li>
                Developed responsive frontend themes that work for Chrome,
                Safari, Edge, Internet Explorer, and Firefox.
              </li>
              <li>
                Mastery of Git and interfacing with the command-line without the
                use of GUI.
              </li>
              <li>
                Applied jQuery to numerous Drupal and Wordpress sites, through
                either the use of Bootstrap, Foundation, or custom jQuery.
              </li>
            </ul>
            <h3 className="font-bold mt-10 text-3xl text-gray-900 uppercase">
              WebMechanix
            </h3>
            <div className="text-gray-600 mb-4">2016</div>
            <div className="font-medium mb-5">
              Intern{" "}
              <span className="text-gray-600 mb-4 font-normal">2016</span>{" "}
            </div>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Created custom responsive HTML email templates for marketing
                campaigns.
              </li>
              <li>
                Completed UX analysis of client websites to deliver reports on
                design changes.
              </li>
              <li>
                Utilized tools such as Google Analytics, Google Tag Manager,
                Hotjar, Hubspot, and Optimizly to analyze site trends and test
                design changes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
