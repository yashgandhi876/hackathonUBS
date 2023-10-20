import * as React from "react";
import { NavLink } from "react-router-dom"; 
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
      
        <p className="navlink"> <NavLink to="/"> Project Explorer </NavLink>  </p>
        <p className="addProjectBtn navlink"> <NavLink to="/add-project"> 
                             Add Project 
                        </NavLink></p>
        <p className="navlink"> <NavLink to="/about"> 
                            About Us 
                        </NavLink> </p>
      </div>
    </div>
    );
}
