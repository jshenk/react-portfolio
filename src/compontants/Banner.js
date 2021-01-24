import React from "react";

function Banner(props) {
  return (
    <div class="w-full">
      <div className="bg-gradient-to-r flex from-purple-900 h-cover-banner items-end overflow-hidden to-yellow-200 via-yellow-400">
        <div className="container mx-auto text-left">
          <h1 className="border-b-4 border-white font-semibold mb-12 pb-2 pr-20 text-6xl text-left text-white w-auto inline-block">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Banner;
