import React from 'react';

function PortfolioCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.image} alt="test" />
      <div className="p-6">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            {props.summary}
          </p>
        </div>
        <div className="p-6">
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
    </div>
  );
}
export default PortfolioCard;
