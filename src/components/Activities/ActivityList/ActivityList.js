import React, { useState, useEffect }from 'react';
import './ActivityList.css';
import ActivityService from '../../../services/ActivityService';
import Activity from '../Activity/Activity';

const ActivityList = () => {
  const [activity, setActivity] = useState([]);
  

  useEffect(() => {
    const service = new ActivityService();
    setActivity(service.list());

  },[]);

  return(
  <section className="ActivityList" id="activities">
        <div className="space"></div>
        <div className="activity-header title">Activités de la clinique</div>
        <div className="header-line"></div>
        <div className="activityList-body">
             { activity.map((aActivity,index) => <Activity activityObj={aActivity} key={index}/> ) }
        </div>
    </section>
);
  }

export default ActivityList;
