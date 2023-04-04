import React, { useState, useEffect }from 'react';
import PropTypes from 'prop-types';
import './Team.css';

import TeamService from '../../../services/TeamService';

const Team = () => {

  const [team, setTeam] = useState([]);
  

  useEffect(() => {
    const service = new TeamService();
    setTeam(service.list());

  },[]);
  
  return(
  <section className="News" id="team">
        <div className="space"></div>
        <div className="team-header title">Notre équipe</div>
        <div className="header-line"></div>
        <div className="team-body">
             {
              team.map((aTeam,index) =>
                <div key={index} className="team-card">
                    <div className="team-photo">
                      <img src={"images/team/" + aTeam.photo} alt={aTeam.nom} />
                      <div className="team-social">
                       <a target="_blank" rel="noreferrer" href="/"><i className="fa fa-facebook"></i></a>
                       <a target="_blank" rel="noreferrer" href="/"><i className="fa fa-twitter"></i></a>
                       <a target="_blank" rel="noreferrer" href="/"><i className="fa fa-instagram"></i></a>
                    </div>
                      </div>
                    <div className="team-name">{aTeam.nom}</div>
                    <div className="team-role">{aTeam.role}</div>
                    <div className="team-shortdescription">{aTeam.description}</div>
                    
                </div>
              )
             }
        </div>
    </section>
);
  }

Team.propTypes = {};

Team.defaultProps = {};

export default Team;
