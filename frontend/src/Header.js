import * as React from "react";

import "./App.css"

export default function Header() {
    return (
		<div className="navbar">
      <div className="upperNav">
        <div className="logoName">
          <img className="logo" src="https://www.ubs.com/etc/designs/fit/img/UBS_Logo_Semibold.svg" alt="ubs logo" />
          <p>India</p>
        </div>
      </div>
      <div className="lowerNav">
        <p className="navlink"> Project Explorer </p>
        <p className="addProjectBtn navlink"> Add Project</p>
        <p className="navlink">About Us</p>
      </div>
    </div>
    );
}
