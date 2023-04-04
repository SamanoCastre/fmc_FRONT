import React, { useState, useEffect }from 'react';
import './TeamList.css';
import TeamService from '../../../services/TeamService';

const TeamList = () => {

  const [Teams, setTeams] = useState([]);
  

  useEffect(() => {
    const service = new TeamService();
    setTeams(service.list());

  },[]);
  
  return (
  <div className="TeamList" id="Teams">
        <div className="space"></div>
        <div className="TeamList-header title">Nos projets</div>
        <div className="header-line"></div>
        <div className="TeamList-body">
             {
              Teams.map((aTeam,index) =>
                <div key={index} className="Team-card">
                    <div className="Team-photo"><img src={"images/Teams/" + aTeam.photo} alt={aTeam.title} /></div>
                    <div className="Team-wrapper">
                        <div className="Team-title">{aTeam.title}</div>
                        <div className="Team-shortdescription">{aTeam.description}</div>
                        <a className="Team-plus-button" href="/Teams/5">cliquez pour voir...</a>
                    </div>
                </div>
              )
             }
        </div>
  </div>
);
}

export default TeamList;
