import React from "react";
import Menu from "./Menu";
import logo from './logo.svg';

function Header() {
  return (
    <div className={"header flex items-center"}>
      <div className={"square-one"}> <img src={"https://picsum.photos/700"} alt={"test"}/> </div>
      <div className={"square-two max-w-md p-10 bg-white -ml-10 -mr-10 relative text-left"}>
        <h1 className={"text-4xl font-bold mb-2"}>Hi! I'm Jenna!</h1>
        <p>Lorem ipsum dolor sit amet, praesent eu dolor, molestie id, dictum mi sollicitudin magna sed ac turpis. Ac mi. Feugiat elit non eros felis at. Nunc at felis maecenas est lorem, aptent tincidunt </p>
      </div>
      <div className={"square-three"}> <img src={"https://picsum.photos/400"} alt={"test"}/></div>
    </div>
  );
}
export default Header;
