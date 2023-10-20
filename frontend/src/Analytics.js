import {useState, useEffect} from "react";
import "./Analytics.css"
import CountUp from 'react-countup';
import Chart from 'react-google-charts';
import axios from "axios";

export default function Analytics() {


  const [tagCount, setTagCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [contributorsCount, setContributorsCount] = useState(0);


  const fetchData = async () => {
    await axios.get("http://localhost:8080/get-tags-count").then((res) => {
      setTagCount(res.data);
    })

    await axios.get("http://localhost:8080/get-projects-count").then((res) => {
      setProjectCount(res.data);
    })

    await axios.get("http://localhost:8080/get-contributors-count").then((res) => {
      setContributorsCount(res.data);
    })
  }

  useEffect(() => {
    fetchData()
  })


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
          <CountUp className="number" end={tagCount} />+</label>
          <p className="name">Number of Tags</p>
        </div>

        <div className="card">
          <label className="numberLabel">
          <CountUp className="number" end={projectCount} />+</label>
          <p className="name">Number of Projects</p>
        </div>

        <div className="card">
          <label className="numberLabel">
          <CountUp className="number" end={contributorsCount} />+</label>
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
