import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import './SocialForm.css';

const SocialForm = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <section className="SocialForm">
     Activities Form - Work in progress
     </section>

);
}
export default SocialForm;