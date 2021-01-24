import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <>
      <NavLink to="/" className="uppercase pr-6" activeClassName="font-medium">
        <div className="bg-yellow-400 rounded p-3 inline-block font-black">
          <span>JS.</span>
        </div>
      </NavLink>
    </>
  );
}
export default Logo;
