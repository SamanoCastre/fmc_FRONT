import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import './ActivityPage.css';

const ActivityPage = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log("on est dans la page d'activite")

  return (
    <section className="ActivityPage">
     Activities page - Work in progress
     </section>

);
}
export default ActivityPage;