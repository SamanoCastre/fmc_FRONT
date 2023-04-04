import React, { useState, useEffect }from 'react';
import './SocialList.css';
import SocialService from '../../../services/SocialService';

const SocialList = () => {

  const [Socials, setSocials] = useState([]);
  

  useEffect(() => {
    const service = new SocialService();
    setSocials(service.list());

  },[]);
  
  return (
  <div className="SocialList" id="Socials">
        <div className="space"></div>
        <div className="SocialList-header title">Nos projets</div>
        <div className="header-line"></div>
        <div className="SocialList-body">
             {
              Socials.map((aSocial,index) =>
                <div key={index} className="Social-card">
                    <div className="Social-photo"><img src={"images/Socials/" + aSocial.photo} alt={aSocial.title} /></div>
                    <div className="Social-wrapper">
                        <div className="Social-title">{aSocial.title}</div>
                        <div className="Social-shortdescription">{aSocial.description}</div>
                        <a className="Social-plus-button" href="/Socials/5">cliquez pour voir...</a>
                    </div>
                </div>
              )
             }
        </div>
  </div>
);
}

export default SocialList;
