import React, { useState, useEffect }from 'react';
import './Activity.css';



const Activity = (props) => {

  
  return(
    <div  className="activity-card">
        <div className="activity-photo"><img src={"images/activities/" + props.activityObj.photo} alt={props.activityObj.title} /></div>
        <div className="activity-title">{props.activityObj.title}</div>
        <div className="activity-shortdescription">{props.activityObj.description}</div>
        <div className="activity-date">Date : {props.activityObj.date}</div>
        <a className="activity-plus-button" href='/activities/5'>voir plus...</a>
    </div>
);
  }

export default Activity;
