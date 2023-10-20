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
        <div  className="flex space-x-1">
        <div>
        <img width={40} src="https://upload.wikimedia.org/wikipedia/en/9/99/Dora_the_Explorer_%28character%29.webp"/>
        </div>
        <div>
          <h1 className="text-2xl font-normal italic">DORA </h1>
          <p className="text-xs font-medium">Dev Repo Explorer</p>
        </div>
        
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
