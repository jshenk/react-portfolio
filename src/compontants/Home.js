import React from 'react';

function Home (props) {
  return (
    <div className={props.class}>
      <div className="flex relative p-10">
      <div className="bg-red-500 h-screen flex-1"></div>
      <div className="bg-gray-200 h-screen flex-1"></div>
      <div className="absolute position-center ">
        <h1 className="text-title font-black uppercase leading-none text-left">He<br/>llo<span className="bg-yellow-500 h-10 w-10 inline-block rounded-full"></span></h1>
        <p className="pl-4 text-5xl text-left w-full">I'm Jenna!</p>
      </div>
      </div>
    </div>
  );
}
export default Home;