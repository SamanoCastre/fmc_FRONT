import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import './TeamForm.css';

const TeamForm = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <section className="TeamForm">
     Activities Form - Work in progress
     </section>

);
}
export default TeamForm;