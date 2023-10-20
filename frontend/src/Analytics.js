import {useState, useEffect} from "react";
import "./Analytics.css"
import CountUp from 'react-countup';
import Chart from 'react-google-charts';

export default function Analytics() {

  const data = [
    ["Task", "Hours per Day"],
    ["Javascript", 11],
    ["Java", 2],
    ["React", 2],
    ["SQL", 2],
    ["Kotlin", 7],
  ];
  
  const options = {
    title: "Projects and Technologies used",
  };
  

    return (
		<div className="analytics">
      <div className="cards">
        <div className="card">
          <label className="numberLabel">
          <CountUp className="number" end={100} />+</label>
          <p className="name">Number of Tags</p>
        </div>

        <div className="card">
          <label className="numberLabel">
          <CountUp className="number" end={100} />+</label>
          <p className="name">Number of Projects</p>
        </div>

        <div className="card">
          <label className="numberLabel">
          <CountUp className="number" end={100} />+</label>
          <p className="name">Number of Contributors</p>
        </div>
      </div>
      <div className="charContainer">
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"700px"}
        height={"700px"}
      />
      </div>
		</div>
    );
}
