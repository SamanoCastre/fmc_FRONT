import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import './NewsForm.css';

const NewsForm = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <section className="NewsForm">
     Activities Form - Work in progress
     </section>

);
}
export default NewsForm;