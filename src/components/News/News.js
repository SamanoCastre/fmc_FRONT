import React, { useState, useEffect }from 'react';
import './News.css';


const News = (props) => {

  
  
  return(
    <div  className="news-card">
        <div className="news-photo"><img src={"images/news/" + props.newsObj.photo} alt={props.newsObj.title} /></div>
        <div className="news-title">{props.newsObj.title}</div>
        <div className="news-shortdescription">{props.newsObj.description}</div>
        <div className="news-date">Date : {props.newsObj.date}</div>
        <a className="news-plus-button" href="/news/5">voir plus...</a>
    </div>
);
  }

export default News;
