import React, { useState, useEffect }from 'react';
import './ProjectList.css';
import ProjectService from '../../../services/ProjectService';

const ProjectList = () => {

  const [projects, setProjects] = useState([]);
  

  useEffect(() => {
    const service = new ProjectService();
    setProjects(service.list());

  },[]);
  
  return (
  <div className="ProjectList" id="projects">
        <div className="space"></div>
        <div className="projectList-header title">Nos projets</div>
        <div className="header-line"></div>
        <div className="projectList-body">
             {
              projects.map((aproject,index) =>
                <div key={index} className="project-card">
                    <div className="project-photo"><img src={"images/projects/" + aproject.photo} alt={aproject.title} /></div>
                    <div className="project-wrapper">
                        <div className="project-title">{aproject.title}</div>
                        <div className="project-shortdescription">{aproject.description}</div>
                        <a className="project-plus-button" href="/projects/5">cliquez pour voir...</a>
                    </div>
                </div>
              )
             }
        </div>
  </div>
);
}

export default ProjectList;
