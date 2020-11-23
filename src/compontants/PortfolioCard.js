import React from 'react';

function PortfolioCard(props) {
  const tags = props.tags;
  const projectTags = tags.map(function(tag) {
    return (
      <span className="w-full text-gray-600 text-xs md:text-sm pr-4 uppercase">{tag}</span>
    );
  });
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white flex flex-col text-left">
        <img className="w-full" src={props.image} alt="test" />
        <div className="w-full font-bold text-xl text-gray-900 mb-3 px-6 pt-6"><a href={props.url} >{props.title}</a></div>
        <p className="text-gray-800 text-base mb-5 px-6">
          {props.summary}
        </p>
        <div className="mt-auto px-6 pb-6">
          {projectTags}
        </div>
    </div>
  );
}
export default PortfolioCard;
