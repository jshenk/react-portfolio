import React from "react";

function Banner(props) {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r flex items-center overflow-hidden bg-gray-800 clip-banner p-6">
        <div className="container mx-auto text-left lg:pb-16">
          <h1 className="border-b-4 border-white font-semibold mb-12 pb-2 pr-20 lg:text-6xl text-left text-white w-auto inline-block">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Banner;
