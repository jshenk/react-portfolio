import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import ngaus from "../images/ngaus.png";
import afm from "../images/afm.png";
import neca from "../images/neca.png";
import ssb from "../images/ssb.png";
import ispe from "../images/ispe.png";
import bins from "../images/bins.png";
import aacc from "../images/aacc.png";
import mscpa from "../images/mscpa.png";
import nadcp from "../images/nadcp.png";
import ficpa from "../images/ficpa.png";
import hacker from "../images/hacker.png";
import barnard from "../images/barnard.png";
import nbaa from "../images/nbaa.png";
import rcmd from "../images/rcmd.png";
import sema from "../images/sema.png";
import cmaa from "../images/cmaa.png";
import jenna from "../images/jenna.png";
import bsn from "../images/bsn.png";
import IconDrupal from "../icons/IconDrupal";
import IconWordpress from "../icons/IconWordpress";
import IconReact from "../icons/IconReact";
import IconAward from "../icons/IconAward";
import Menu from "./Menu";
import Logo from "./Logo";
import Banner from "./Banner";

function MyWork() {
  const portfolio = [
    {
      title: "National Association of Drug Court Professionals",
      summary:
        "Headless Drupal site, with a React frontend. Project provides an interactive cube to find drug court projects to enroll in, based on their risk assesement.",
      image: nadcp,
      link: "",
      tags: ["Drupal 8", "React", "Future Launch"],
      id: "10",
    },
    {
      title: "Hacker News",
      summary:
        'News listing site built with React, pulling from the Hacker News API. Completed project using the "Road to React", by Robin Wieruch.',
      image: hacker,
      link: "https://jshenk.github.io/hacker-news-stories/",
      tags: ["React", "API"],
      id: "11",
    },
    {
      title: "National Guard Association",
      summary: "Drupal 8 rebuild with netFORUM integration.",
      image: ngaus,
      link: "https://www.ngaus.org/",
      tags: ["Drupal 8", "Feature Lead", "Award Winner"],
      id: "1",
    },
    {
      title: "Air Force Magazine",
      summary:
        "Wordpress migration, with a full build using the Gutenberg editor - both custom and basic blocks.",
      image: afm,
      link: "https://www.airforcemag.com/",
      tags: ["Wordpress", "Feature Lead", "Award Winner", "Migration"],
      id: "2",
    },
    {
      title: "Electrical Contractor",
      summary: "Drupal 7 to 8 migration, with full redesign.",
      image: neca,
      link: "https://www.ecmag.com/",
      tags: ["Drupal 8", "Migration"],
      id: "3",
    },
    {
      title: "Sandy Spring Bank",
      summary: "Drupal 8 rebuild, with full redesign.",
      image: ssb,
      link: "/",
      tags: ["Drupal 8", "Award Winner"],
      id: "4",
    },
    {
      title: "International Society for Pharmaceutical Engineering",
      summary: "Drupal 8 rebuild, with an integration with iMIS.",
      image: ispe,
      link: "/",
      tags: ["Drupal 8"],
      id: "5",
    },
    {
      title: "Binswanger Glass",
      summary: "Migration to Wordpress, with a strong focus on ADA compliance.",
      image: bins,
      link: "/",
      tags: ["Wordpress", "Migration"],
      id: "6",
    },
    {
      title: "Lab Tests Online",
      summary:
        "Multilingual Drupal 8 site, with 14 different translations totalling ~1 Million page views a day.",
      image: aacc,
      link: "",
      tags: ["Drupal 8"],
      id: "7",
    },
    {
      title: "The Massachusetts Society of Certified Public Accountants",
      summary:
        "Created a custom child theme to be re-used for several CPA sites. Integration with AMNet, and advanced SASS to make the theme highly customizable.",
      image: mscpa,
      link: "",
      tags: ["Drupal 8", "Future Launch"],
      id: "8",
    },
    {
      title: "Florida Institute of CPAs",
      summary:
        "Created a custom child theme to be re-used for several CPA sites. Integration with AMNet, and advanced SASS to make the theme highly customizable.",
      image: ficpa,
      link: "https://ficpa.org/",
      tags: ["Drupal 8"],
      id: "9",
    },
    {
      title: "Construction Management Association",
      summary:
        "Created a custom child theme to be re-used for several CPA sites. Integration with AMNet, and advanced SASS to make the theme highly customizable.",
      image: cmaa,
      link: "https://ficpa.org/",
      tags: ["Drupal 8"],
      id: "13",
    },
    {
      title: "Barnard College",
      summary:
        "Frontend theme development and site maintenance. Featured enahcments include a fellowship database, which imports fellowship descriptions from a spreadsheet into Drupal nodes, and displays in a fiterable view.",
      image: barnard,
      link: "https://barnard.edu/competitive-fellowships",
      tags: ["Drupal 8"],
      id: "14",
    },
    {
      title: "National Business Aviation Association",
      summary:
        "Wordpress rebuild, with a custom frontend theme including a complex megamenu",
      image: nbaa,
      link: "https://nbaa.org/",
      tags: ["Wordpress"],
      id: "15",
    },
    {
      title: "Specialty Equipment Market Association",
      summary: "Drupal 8 rebuild, with a custom theme using Bootstrap 4",
      image: sema,
      link: "",
      tags: ["Drupal"],
      id: "16",
    },
    {
      title: "RCM&D",
      summary: "Drupal 8 rebuild, with a custom theme",
      image: rcmd,
      link: "https://www.rcmd.com/",
      tags: ["Drupal 8"],
      id: "17",
    },
    {
      title: "Personal Website",
      summary:
        "Built completely with React, utilizing Create React App, React Router, and TailwindCSS.",
      image: jenna,
      link: "https://jennashenk.com/",
      tags: ["React"],
      id: "18",
    },
    {
      title: "BSN Sports",
      summary: "React & Typescript frontend, built on a Symfony backend.",
      image: bsn,
      link: "",
      tags: ["React", "Future Launch"],
      id: "19",
    },
  ];
  const tags = [
    {
      label: "Drupal 8",
      icon: (
        <IconDrupal
          height="70px"
          width="70px"
          className="mx-auto"
          fill="#ecc94b"
        />
      ),
    },
    {
      label: "Wordpress",
      icon: (
        <IconWordpress
          height="70px"
          width="70px"
          className="mx-auto"
          fill="#ecc94b"
        />
      ),
    },
    {
      label: "React",
      icon: (
        <IconReact
          height="70px"
          width="70px"
          className="mx-auto"
          fill="#ecc94b"
        />
      ),
    },
    {
      label: "Award Winner",
      icon: (
        <IconAward
          height="70px"
          width="70px"
          className="mx-auto"
          fill="#ecc94b"
        />
      ),
    },
  ];

  const [filter, setFilter] = useState(false);

  const tagFilter = tags.map((tag, index) => (
    <button
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      onClick={() => {
        setFilter(tag.label);
      }}
      key={index}
    >
      {tag.label}
    </button>
  ));

  const portfolioFilter =
    filter !== false
      ? portfolio.filter((portfolio) => portfolio.tags.includes(filter))
      : portfolio;

  const portfolioListing = portfolioFilter.map((filteredItem) => (
    <PortfolioCard
      key={filteredItem.id}
      title={filteredItem.title}
      image={filteredItem.image}
      summary={filteredItem.summary}
      url={filteredItem.link}
      tags={filteredItem.tags}
    />
  ));

  const currentFilter = filter ? (
    <div className="mb-4 uppercase text-gray-600">
      Filtering by: <span className="border-b-2 border-gray-800">{filter}</span>
    </div>
  ) : (
    <div className="mb-4 uppercase text-gray-600">Filter My Portfolio</div>
  );

  return (
    <div className="p-6 lg:p-0">
      <div className="md:p-6 md:bg-gray-800 md:text-white flex items-center">
        <Logo />
        <Menu />
      </div>
      <Banner title={"Portfolio"} />
      <div className="text-left container mx-auto my-20">
        <div className="bg-gray-200 gap-10 grid grid-cols-2 md:grid-cols-4 p-6 rounded shadow-md">
          <ul>
            <li className="border-b-4 border-yellow-500 inline">React</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>SASS/CSS</li>
            <li className="border-b-4 border-yellow-500 inline">PHP</li>
            <li>C++</li>
          </ul>
          <ul>
            <li className="border-b-4 border-yellow-500 inline">
              Drupal 6 - 8
            </li>
            <li>Wordpress</li>
            <li>Git</li>
            <li>Gulp</li>
            <li>Composer</li>
            <li>Cypress</li>
          </ul>
          <ul>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>Foundation</li>
            <li>Material UI</li>
            <li>Pattern Lab</li>
          </ul>
          <ul>
            <li>Twig</li>
            <li>Linux</li>
            <li>Docker</li>
            <li>MySQL</li>
            <li>Acquia</li>
            <li>React Router</li>
          </ul>
        </div>
      </div>
      <div className="text-left container mx-auto mt-20 mb-10">
        {currentFilter}
        {tagFilter}
      </div>
      <div className="mt-10 grid gap-16 lg:grid-cols-3 px-10 pb-20">
        {portfolioListing}
      </div>
    </div>
  );
}
export default MyWork;
