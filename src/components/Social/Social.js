import React, { useState, useEffect } from 'react';
import './Social.css';
import SocialService from '../../services/SocialService';

const Social = () => {
  const [socialInfo, setSocialInfo] = useState([]);
 
  useEffect(() => {  
      let socialService = new SocialService();
      setSocialInfo(socialService.list());
   },[]);
  
  return(
      <div className="Social" id="home">
        <ul id="social-coordinates">
          {socialInfo['phone'] && <li><i className="fa fa-phone"></i> {socialInfo['phone']}</li>}
          {socialInfo['email'] && <li><i className="fa fa-envelope"></i> {socialInfo['email']}</li>}
        </ul>
        <ul id="social-media">
          {socialInfo['facebook'] && <li><a target="_blank" rel="noreferrer" href={socialInfo['facebook']}><i className="fa fa-facebook"></i></a></li>}
          {socialInfo['instagram'] && <li><a target="_blank" rel="noreferrer" href={socialInfo['instagram']}> <i className="fa fa-instagram"></i></a></li>}
          {socialInfo['twitter'] && <li><a target="_blank" rel="noreferrer" href={socialInfo['twitter']}><i className="fa fa-twitter"></i></a></li>}
          {socialInfo['linkedin'] && <li><a target="_blank" rel="noreferrer" href={socialInfo['linkedin']}><i className="fa fa-linkedin"></i></a></li>}
          {socialInfo['google-plus'] && <li><a target="_blank" rel="noreferrer" href={socialInfo['google-plus']}><i className="fa fa-google-plus"></i></a></li>}
        </ul>
      </div>
    );
}

export default Social;
