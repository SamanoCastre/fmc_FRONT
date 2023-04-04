import React, { useState, useEffect }from 'react';
import './MemberList.css';
import MemberService from '../../../services/MemberService';

const MemberList = () => {

  const [Members, setMembers] = useState([]);
  

  useEffect(() => {
    const service = new MemberService();
    setMembers(service.list());

  },[]);
  
  return (
  <div className="MemberList" id="Members">
        <div className="space"></div>
        <div className="MemberList-header title">Nos projets</div>
        <div className="header-line"></div>
        <div className="MemberList-body">
             {
              Members.map((aMember,index) =>
                <div key={index} className="Member-card">
                    <div className="Member-photo"><img src={"images/Members/" + aMember.photo} alt={aMember.title} /></div>
                    <div className="Member-wrapper">
                        <div className="Member-title">{aMember.title}</div>
                        <div className="Member-shortdescription">{aMember.description}</div>
                        <a className="Member-plus-button" href="/Members/5">cliquez pour voir...</a>
                    </div>
                </div>
              )
             }
        </div>
  </div>
);
}

export default MemberList;
