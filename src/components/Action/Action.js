import React, { useState, useEffect }from 'react';
import PropTypes from 'prop-types';
import './Action.css';
import ProjectService from '../../services/ProjectService';

const Action = () => {

  const [projects, setProjects] = useState([]);
  

  useEffect(() => {
    const service = new ProjectService();
    setProjects(service.list());

  },[]);
  
  return (
  <div className="Action" id="action">
        <div className="space"></div>
        <div className="action-header title">Nos projets</div>
        <div className="header-line"></div>
        <div className="action-body">
             {
              projects.map((aproject,index) =>
                <div key={index} className="project-card">
                    <div className="project-photo"><img src={"images/project/" + aproject.photo} alt={aproject.title} /></div>
                    <div className="project-wrapper">
                        <div className="project-title">{aproject.title}</div>
                        <div className="project-shortdescription">{aproject.description}</div>
                        <button className="project-plus-button">cliquez pour voir...</button>
                    </div>
                </div>
              )
             }
        </div>
  </div>
);
}

export default Action;
