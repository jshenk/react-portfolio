import React from 'react';
import logo from "./logo.svg";

function Menu() {
  return  (
    <div className={"topbar flex justify-between w-full items-center container mx-auto"}>
      <img src={logo} alt={"logo"} />
      <ul className="flex">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">Active</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
        </li>
        <li className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
