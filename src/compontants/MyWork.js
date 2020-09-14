import React, { useState } from 'react'
import PortfolioCard from './PortfolioCard'
import ngaus from '../images/ngaus.png'
import afm from '../images/afm.png'
import neca from '../images/neca.png'
import ssb from '../images/ssb.png'
import ispe from '../images/ispe.png'
import bins from '../images/bins.png'
import aacc from '../images/aacc.png'
import mscpa from '../images/mscpa.png'
import nadcp from '../images/nadcp.png'
import ficpa from '../images/ficpa.png'
import hacker from '../images/hacker.png'
import IconDrupal from '../icons/IconDrupal'
import IconWordpress from '../icons/IconWordpress'
import IconReact from '../icons/IconReact'
import IconAward from '../icons/IconAward'

function MyWork () {
    const portfolio = [
        {
            title: 'National Guard Association',
            summary: 'Lead development team to produce one of the fastest builds in company history. Delivered project under budget and ahead of the deadline.',
            image: ngaus,
            link: 'https://www.ngaus.org/',
            tags: ['Drupal 8', 'Feature Lead', 'Award Winner'],
            id: '1'
        },
        {
            title: 'Air Force Magazine',
            summary: '',
            image: afm,
            link: 'https://www.airforcemag.com/',
            tags: ['Wordpress', 'Feature Lead', 'Award Winner', 'Migration'],
            id: '2'
        },
        {
            title: 'Electrical Contractor',
            summary: '',
            image: neca,
            link: 'https://www.ecmag.com/',
            tags: ['Drupal 8', 'Migration'],
            id: '3'
        },
        {
            title: 'Sandy Spring Bank',
            summary: '',
            image: ssb,
            link: '/',
            tags: ['Drupal 8', 'Award Winner'],
            id: '4'
        },
        {
            title: 'International Society for Pharmaceutical Engineering',
            summary: '',
            image: ispe,
            link: '/',
            tags: ['Drupal 8'],
            id: '5'
        },
        {
            title: 'Binswanger Glass',
            summary: '',
            image: bins,
            link: '/',
            tags: ['Wordpress', 'Migration'],
            id: '6'
        },
        {
            title: 'Lab Tests Online',
            summary: '',
            image: aacc,
            link: '',
            tags: ['Drupal 8'],
            id: '7'
        },
        {
            title: 'The Massachusetts Society of Certified Public Accountants',
            summary: '',
            image: mscpa,
            link: '',
            tags: ['Drupal 8'],
            id: '8'
        },
        {
            title: 'Florida Institute of CPAs',
            summary: '',
            image: ficpa,
            link: '',
            tags: ['Drupal 8'],
            id: '9'
        },
        {
            title: 'National Association of Drug Court Professionals',
            summary: 'Headless Drupal site, with a React frontend. Project provides an interactive cube to find drug court projects to enroll in, based on their risk assesement.',
            image: nadcp,
            link: '',
            tags: ['Drupal 8', 'React'],
            id: '10'
        },
        {
            title: 'Hacker News',
            summary: 'News listing site built with React, pulling from the Hacker News API. Completed project using the "Road to React", by Robin Wieruch.',
            image: hacker,
            link: 'https://jshenk.github.io/hacker-news-stories/',
            tags: ['React', 'API'],
            id: '11'
        },

    ];
    const tags = [
        {
            label: 'Drupal 8',
            icon: <IconDrupal height="70px" width="70px" className="mx-auto" fill="#ecc94b"/>
        },
        {
            label: 'Wordpress',
            icon: <IconWordpress height="70px" width="70px" className="mx-auto" fill="#ecc94b"/>
        },
        {
            label: 'React',
            icon: <IconReact height="70px" width="70px" className="mx-auto" fill="#ecc94b"/>
        },
        {
            label: 'Award Winner',
            icon: <IconAward height="70px" width="70px" className="mx-auto" fill="#ecc94b"/>
        }
    ]

    const [filter, setFilter] = useState(false)

    const tagFilter = tags.map((tag, index) =>
        <button
        className="p-4 shadow text-gray-900 h-32 text-2xl" 
        onClick={() => {
            setFilter(tag.label)
        }} key={index}>{tag.icon}{tag.label}</button>
    )

    const portfolioFilter = (filter !== false ? portfolio.filter(portfolio => portfolio.tags.includes(filter)) : portfolio)

    const portfolioListing = portfolioFilter.map((filteredItem) =>
        <PortfolioCard key={filteredItem.id} title={filteredItem.title} image={filteredItem.image} summary={filteredItem.summary} url={filteredItem.link} tags={filteredItem.tags} />
    )

    const currentFilter = (filter ? <div className="text-xl w-full font-bold uppercase mb-5 text-gray-700 text-right">Filtering by: {filter}</div> : <div className="text-right text-gray-700 uppercase text-xl w-full font-bold mb-5">Filter My Portfolio</div>)

    return (
        <div>
            <div className="bg-purple-500 h-about-lead w-2/4 mt-10">

            </div>
            <h1 className="-mt-56 container mx-auto font-black leading-none text-title-inner text-left uppercase mb-10">My<br/>Work<span className="bg-yellow-500 h-5 w-5 inline-block rounded-full"></span></h1>
            <div className="container mx-auto ">
                <div className="flex">
                    <div className="text-left w-2/3 pr-10 ">
                        <h2 className="text-xl w-full font-bold uppercase mb-5 text-gray-700 text-left">Skills</h2>
                         <ul className="text-3xl grid grid-cols-2 mb-10">
                            <li>React</li>
                            <li>Drupal 6, 7, & 8</li>
                            <li>Javascript</li>
                            <li>Wordpress</li>
                            <li>SASS/CSS</li>
                            <li>PHP</li>
                        </ul>

                        <div className="grid grid-cols-3 gap-10 text-xl">
                            <ul>
                                <li>Git</li>
                                <li>Gulp</li>
                                <li>Composer</li>
                                <li>Acquia</li>
                                <li>Drupal custom modules</li>
                            </ul>
                            <ul>
                                <li>Foundation</li>
                                <li>Bootstrap</li>
                                <li>Material UI</li>
                                <li>Pattern Lab</li>
                            </ul>
                            <ul>
                                <li>Twig</li>
                                <li>Deployer</li>
                                <li>Linux</li>
                                <li>MYSQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/3">
                        {currentFilter}
                        <div className="grid grid-cols-2 gap-5">
                        {tagFilter}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-teal-400 h-20 ml-auto mt-20 w-1/3"></div>
            <div className="w-10/12 mx-auto mb-10">
                <h2 className="-mt-10 font-bold text-5xl text-right uppercase container mx-auto">Samples</h2>
                <div className="grid gap-10 grid-cols-3 pt-10">
                    {portfolioListing}
                </div>
            </div>
        </div>
    );
}
export default MyWork;