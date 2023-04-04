import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import './ProjectForm.css';

const ProjectForm = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <section className="ProjectForm">
     Activities Form - Work in progress
     </section>

);
}
export default ProjectForm;