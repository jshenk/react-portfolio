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
import Menu from './Menu'

function MyWork () {
    const portfolio = [
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
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" 
        onClick={() => {
            setFilter(tag.label)
        }} key={index}>{tag.label}</button>
    )

    const portfolioFilter = (filter !== false ? portfolio.filter(portfolio => portfolio.tags.includes(filter)) : portfolio)

    const portfolioListing = portfolioFilter.map((filteredItem) =>
        <PortfolioCard key={filteredItem.id} title={filteredItem.title} image={filteredItem.image} summary={filteredItem.summary} url={filteredItem.link} tags={filteredItem.tags} />
    )

    const currentFilter = (filter ? <div className="mb-4 uppercase text-gray-600">Filtering by: <span className="border-b-2 border-gray-800">{filter}</span></div> : <div className="mb-4 uppercase text-gray-600">Filter My Portfolio</div>)

    return (
        <div>
            <div className="w-1/2 ml-auto pt-10 pr-10">
                <Menu />
            </div>
            <div className="text-left container mx-auto my-10">
                <h1 className="mb-4 text-gray-800 text-6xl">Stack</h1>
                <div className="grid grid-cols-4 gap-10">
                    <ul>
                        <li className="border-b-4 border-yellow-500 inline">React</li>
                        <li>Javascript</li>
                        <li>SASS/CSS</li>
                        <li className="border-b-4 border-yellow-500 inline">PHP</li>
                        <li>C++</li>
                    </ul>
                    <ul>
                        <li className="border-b-4 border-yellow-500 inline">Drupal 6 - 8</li>
                        <li>Wordpress</li>
                        <li>Git</li>
                        <li>Gulp</li>
                        <li>Composer</li>
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
                        <li>MYSQL</li>
                        <li>Acquia</li>
                    </ul>

                </div>
            </div>
            <div className="text-left container m-auto">
                {currentFilter}
                {tagFilter}
                <div className="mt-10 grid gap-16 grid-cols-3 container mx-auto">
                {portfolioListing}
                </div>
            </div>
        </div>
    );
}
export default MyWork;
