import * as React from "react";
import ProjectCard from "./Card";
import initialProjects from "./Data"

export default function Dashboard() {
  
  const [projects, setProjects] = React.useState(initialProjects)
  
    return (
		<div className="dashboard">
      <div className="grid gap-3 grid-cols-3 flex-wrap">
      {
        projects.map(project=>{
          return <ProjectCard project = {project} />
        })
      } 
       </div>    
		</div>
    );
}
