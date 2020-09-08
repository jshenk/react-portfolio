import React from 'react';

function Home (props) {
  return (
    <div className={props.class}>
      <div className="flex relative p-10">
      <div className="bg-red-500 h-screen flex-1"></div>
      <div className="bg-gray-200 h-screen flex-1"></div>
      <div className="absolute position-center ">
        <h1 className="text-title font-black uppercase">Hello!</h1>
        <buton>About Me</buton>
        <button>My Work</button>
        <button>Contact</button>
      </div>
      </div>
    </div>
  );
}
export default Home;