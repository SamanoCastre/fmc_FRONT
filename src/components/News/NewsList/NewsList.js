import React, { useState, useEffect }from 'react';
import './NewsList.css';
import NewsService from '../../../services/NewsService';
import News from '../News';

const NewsList = () => {
  const [news, setNews] = useState([]);
  

  useEffect(() => {
    const service = new NewsService();
    setNews(service.list());

  },[]);

  return(
  <section className="NewsList" id="news">
        <div className="space"></div>
        <div className="news-header title">Actualités de la clinique</div>
        <div className="header-line"></div>
        <div className="newsList-body">
             { news.map((aNews,index) => <News newsObj={aNews} key={index}/> ) }
        </div>
    </section>
);
  }

export default NewsList;
