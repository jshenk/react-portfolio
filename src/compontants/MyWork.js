import React from 'react'
import PortfolioCard from './PortfolioCard'
import ngaus from '../images/ngaus.png'
import afm from '../images/afm.png'
import neca from '../images/neca.png'

function MyWork () {
    const portfolio = [
        {
            title: 'National Guard Association',
            summary: 'My quick blurb',
            image: ngaus,
            link: 'https://www.ngaus.org/',
            tags: ['tag1', 'tag2', 'tag3'],
            id: '1'
        },
        {
            title: 'Air Force Magazine',
            summary: 'My quick blurb la la la',
            image: afm,
            link: 'https://www.airforcemag.com/',
            tags: ['tag1', 'tag2'],
            id: '2'
        },
        {
            title: 'Electrical Contractor',
            summary: 'My quick blurb la la la',
            image: neca,
            link: 'https://www.ecmag.com/',
            tags: ['tag1', 'tag2'],
            id: '3'
        },


    ];
    const portfolioListing = portfolio.map((item, index) =>
        <PortfolioCard key={item.id} title={item.title} summary={item.summary} image={item.image} url={item.link} tags={item.tags} />
    )
    return (
        <div>
        <h1 className="container mx-auto font-black leading-none text-6xl text-left uppercase mb-10">My<br/>Work<span className="bg-yellow-500 h-5 w-5 inline-block rounded-full"></span></h1>
        <div className="grid gap-10 grid-cols-3 container mx-auto">
            {portfolioListing}
        
            {/* <PortfolioCard title="National Guard Association" summary="My quick blurb" image={ngaus} url="https://www.ngaus.org/"/>
            <PortfolioCard title="Air Force Magazine" summary="My quick blurb" image={afm} url="https://www.airforcemag.com/"/>
            <PortfolioCard title="Electrical Contractor Magazine" summary="My quick blurb" image={neca} url="https://www.ecmag.com/"/>
            <PortfolioCard title="Sandy Spring Bank" summary="My quick blurb" image="https://picsum.photos/600/300" url="https://www.sandyspringbank.com/"/>
            <PortfolioCard title="Florida Institute of CPAs" summary="My quick blurb" image="https://picsum.photos/600/300" url="https://www.ngaus.org/"/>
            <PortfolioCard title="National Association of Drug Court Professionals" summary="My quick blurb" image="https://picsum.photos/600/300" url="/"/> */}
        </div>
        </div>
    );
}
export default MyWork;