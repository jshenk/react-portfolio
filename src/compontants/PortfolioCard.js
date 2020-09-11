import React from 'react';

function PortfolioCard(props) {
  const tags = props.tags;
  const projectTags = tags.map(function(tag) {
    return (
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-up">{tag}</span>
    );
  });
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <img src={props.image} alt="test" />
      <div className="p-6">
          <div className="font-bold text-xl mb-2"><a href={props.url} target="_blank" >{props.title}</a></div>
          <p className="text-gray-700 text-base">
            {props.summary}
          </p>
        </div>
        
        <div className="p-6">
          {projectTags}
        </div>
    </div>
  );
}
export default PortfolioCard;
