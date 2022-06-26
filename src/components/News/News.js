import React, { useState, useEffect }from 'react';
import './News.css';
import NewsService from '../../services/NewsService';

const News = () => {

  const [news, setNews] = useState([]);
  

  useEffect(() => {
    const service = new NewsService();
    setNews(service.list());

  },[]);
  
  return(
  <section className="News" id="news">
        <div className="space"></div>
        <div className="news-header title">Actualités de la clinique</div>
        <div className="header-line"></div>
        <div className="news-body">
             {
              news.map((aNews,index) =>
                <div key={index} className="news-card">
                    <div className="news-photo"><img src={"images/news/" + aNews.photo} alt={aNews.title} /></div>
                    <div className="news-title">{aNews.title}</div>
                    <div className="news-shortdescription">{aNews.description}</div>
                    <div className="news-date">Date : {aNews.date}</div>
                    <button className="news-plus-button">voir plus...</button>
                </div>
              )
             }
        </div>
    </section>
);
  }

export default News;
