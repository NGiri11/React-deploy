import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="text-white flex bg-teal-700 h-16 justify-between text-3xl items-center px-7">
        <h1>Chula Chokha</h1>
        <div className="flex gap-10 text-lg">
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/aboutus"}>About us</Link>
          <Link to={"/contactus"}>Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
