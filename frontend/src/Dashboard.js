import {useState, useEffect} from "react";
import ProjectCard from "./Card";
import axios from "axios";
import "./Dashboard.css"

export default function Dashboard() {

  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => await axios.get("http://localhost:8080/get-projects").then((res) => {setProjects(res.data); setFilterProjects(res.data)})

  //useEffect(() => {fetchData()}, [])

  useEffect(() => setFilterProjects(projects.filter(project => project.tags.some(tag => tag.name.includes(search)))), [search])

    return (
		<div className="dashboard">
      <div className="bar">
        <input className="searchbar" placeholder="Search tags" type="text"  value={search} onChange={(event)=> setSearch(event.target.value)} />
      </div>
      <div className="grid gap-3 grid-cols-3 flex-wrap">
      {
        filterProjects.map(project=>{
          return <ProjectCard project = {project} />
        })
      }
       </div>
		</div>
    );
}
