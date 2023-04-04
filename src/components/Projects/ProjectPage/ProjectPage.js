import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './ProjectPage.css';

const ProjectPage = (props) =>{
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <section className="ProjectPage">
    Projects Page - Work in progress
   </section>
);
 }
export default ProjectPage;