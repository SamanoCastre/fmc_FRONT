import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import './ActivityForm.css';

const ActivityForm = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <section className="ActivityForm">
     Activities Form - Work in progress
     </section>

);
}
export default ActivityForm;