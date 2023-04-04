import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './NewsPage.css';

const NewsPage = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <section className="NewsPage">
      News component - Work in progress
    </section>
);
  }
export default NewsPage;