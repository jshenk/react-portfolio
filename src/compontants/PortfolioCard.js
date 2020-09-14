import React from 'react';

function PortfolioCard(props) {
  const tags = props.tags;
  const projectTags = tags.map(function(tag) {
    return (
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">{tag}</span>
    );
  });
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white flex flex-col">
      <img className="w-full" src={props.image} alt="test" />
      <div className="p-6 pb-0">
          <div className="font-bold text-2xl mb-2"><a href={props.url} >{props.title}</a></div>
          <p className="text-gray-700 text-base text-left">
            {props.summary}
          </p>
        </div>
        
        <div className="p-6 mt-auto">
          {projectTags}
        </div>
    </div>
  );
}
export default PortfolioCard;
