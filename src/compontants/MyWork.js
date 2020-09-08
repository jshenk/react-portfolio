import React from 'react';
import PortfolioCard from './PortfolioCard';

function MyWork () {
    return (
        <div>
        <h1>My Work</h1>
        <div className="flex">
            <PortfolioCard title="National Guard Association" summary="My quick blurb" image="/" url="https://www.ngaus.org/"/>
            <PortfolioCard title="National Guard Association" summary="My quick blurb" image="/" url="https://www.ngaus.org/"/>
        </div>
        </div>
    );
}
export default MyWork;